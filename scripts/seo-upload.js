/**
 * SEO Content Upload Script — RedHeart
 * Uploads category + subcategory SEO content to MongoDB via the upsert API
 * Run: node scripts/seo-upload.js
 */

const API = "https://backend.redheart.in/api/category-seo/upsert";

const pages = [

// ─────────────────────────────────────────────────────────────────────────────
// MAIN CATEGORIES
// ─────────────────────────────────────────────────────────────────────────────

{
  pageKey: "florist-near-me",
  categorySlug: "florist-near-me",
  subcategorySlug: "",
  url: "/florist-near-me",
  defaultH1: "Flowers Delivery",
  h1: "Flowers Delivery",
  metaTitle: "Online Florist – Same-Day Flower Delivery | RedHeart",
  metaDescription: "Order fresh flowers online with same-day & midnight delivery across 830+ cities in India. Roses, lilies, bouquets & more from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/florist-near-me",
  metaKeyword: "flowers online, send flowers online India, same day flower delivery, online florist India, fresh flower bouquets, flower delivery India, buy roses online",
  footerContent: `<h2>Fresh Flowers Delivered the Same Day — Across India</h2>
<p>Flowers are the one gift that never needs an explanation. Whether it's a birthday, an anniversary, a festival, or just a quiet Tuesday when someone deserves to feel special — the right bouquet says it all. RedHeart brings you handcrafted, fresh flower arrangements starting at ₹399, delivered the same day to 830+ cities across India.</p>

<h2>Why Flowers Make the Most Thoughtful Gift</h2>
<p>No gift works across as many relationships and occasions as flowers do. They're right for a grandmother's birthday, a colleague's farewell, a new mother's hospital room, and a best friend's housewarming. Flowers carry something that other gifts can't — presence. The moment they arrive, they change the mood of a room and the feeling of the day.</p>
<p>In India, flowers have always been woven into celebration. From marigold garlands at weddings to rose bouquets on Valentine's Day, from carnations gifted on Mother's Day to mixed arrangements during Diwali — flowers are how we mark the moments that matter.</p>

<h2>Best Flowers by Occasion</h2>
<p>Choosing the right flower makes a difference. Roses are the timeless choice for love and romance — anniversaries, Valentine's Day, or simply to say "I'm thinking of you." Lilies bring calm elegance to get well soon moments, new beginnings, and sympathy. Carnations express warmth and gratitude — perfect for mothers, teachers, and close friends. Mixed bouquets are the most versatile — celebratory, personal, and always appreciated.</p>

<h2>Flowers for Festivals and Celebrations</h2>
<p>Festivals and flowers go hand in hand in India. During Raksha Bandhan, a flower bouquet paired with a small cake or sweets is a heartfelt sibling gift. Diwali brings demand for warm, festive arrangements. Valentine's Day drives a surge in red roses, but the full week of rose day, propose day, and friendship day is equally popular for sending flowers. Mother's Day, Women's Day, and Holi each carry their own flower traditions.</p>

<h2>Same-Day and Midnight Flower Delivery</h2>
<p>You don't need to plan days ahead. With RedHeart's same-day delivery, place your order in the morning and it reaches your recipient by evening — across 830+ Indian cities. Midnight delivery is also available for those last-minute moments. Browse by occasion, relationship, or colour to find exactly what you need.</p>`,
  faqs: [
    { question: "Can I get same-day flower delivery across India?", answer: "Yes. RedHeart delivers fresh flower bouquets the same day across 830+ cities in India. Place your order before the daily cutoff and your flowers arrive the same day — midnight delivery is also available." },
    { question: "Which flowers are best for a birthday?", answer: "Roses and mixed bouquets are the most popular birthday flowers. Bright colours like red, pink, and yellow work best. For a personal touch, pick the recipient's favourite colour or flower variety." },
    { question: "What flowers are suitable for Raksha Bandhan?", answer: "Mixed flower bouquets and carnations are ideal for Raksha Bandhan — warm, festive, and suitable for gifting between siblings. Pair with a cake or chocolates for a complete gift." },
    { question: "How fresh are the flowers at the time of delivery?", answer: "RedHeart sources flowers locally and prepares arrangements close to delivery time, ensuring maximum freshness on arrival. Same-day orders are prepared the day of delivery." },
    { question: "Can I send flowers with a cake or gift hamper?", answer: "Yes. You can pair any flower bouquet with a cake, chocolate box, or build a full gift hamper at checkout — flowers, cake, and plants together." },
  ],
},

{
  pageKey: "order-cake-online",
  categorySlug: "order-cake-online",
  subcategorySlug: "",
  url: "/order-cake-online",
  defaultH1: "Order Cakes Online",
  h1: "Order Cakes Online",
  metaTitle: "Order Cake Online – Same-Day Delivery | RedHeart",
  metaDescription: "Order fresh cakes online with same-day & midnight delivery across 830+ cities in India. Chocolate, black forest, red velvet & more from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/order-cake-online",
  metaKeyword: "order cake online, cake delivery India, same day cake delivery, birthday cake online, cake order online India, fresh cake delivery, online cake shop",
  footerContent: `<h2>Fresh Cakes Delivered the Same Day — Across India</h2>
<p>A celebration without a cake is just a gathering. Whether it's a birthday surprise, an anniversary dinner, a baby shower, or a simple "well done" moment — a fresh cake makes it memorable. RedHeart delivers handcrafted, eggless and egg cakes starting at ₹399 to 830+ cities across India, the same day you order.</p>

<h2>Why Order Cakes Online from RedHeart</h2>
<p>Ordering a cake online doesn't mean compromising on freshness. Every cake on RedHeart is prepared fresh, sourced from trusted local bakers, and delivered within hours of preparation. You get bakery-quality cakes at your door — no need to step out, no advance booking required for same-day orders.</p>
<p>From classic black forest and rich chocolate truffle to trending pinata cakes and elegant red velvet — there's a cake for every palate and every occasion.</p>

<h2>Cakes for Every Occasion</h2>
<p>Birthdays call for chocolate cakes — indulgent, crowd-pleasing, and universally loved. Anniversaries deserve something more refined: red velvet with cream cheese frosting, or a tiered cake that matches the occasion. For children's parties, pinata cakes bring excitement and theatre. Baby showers and housewarmings call for lighter, pastel-themed cakes that double as decorations. Whatever the occasion, the right cake adds to the memory.</p>

<h2>Cakes for Festivals and Celebrations</h2>
<p>Cake gifting has become a natural part of Indian celebrations. Diwali, Bhai Dooj, and Raksha Bandhan are now as much about cakes as they are about sweets. Christmas and New Year call for themed cakes — from yule logs to midnight countdown cakes. Valentine's Day drives demand for heart-shaped red velvet and chocolate cakes. Mother's Day cakes are a growing tradition — a warm, personal way to celebrate the mothers in your life.</p>

<h2>Same-Day and Midnight Cake Delivery</h2>
<p>Forgot a birthday? Planned a surprise for tonight? RedHeart's same-day and midnight cake delivery has you covered. Order by the cutoff time and your cake arrives fresh the same day — even at midnight for those after-hours celebrations. Available across 830+ cities in India.</p>`,
  faqs: [
    { question: "Can I order a cake for same-day delivery in India?", answer: "Yes. RedHeart delivers fresh cakes the same day across 830+ cities in India. Place your order before the daily cutoff and your cake arrives the same day. Midnight delivery is also available." },
    { question: "Are the cakes on RedHeart made fresh?", answer: "Yes. All cakes are prepared fresh by trusted local bakers and delivered within hours of preparation. Same-day orders are baked the day of delivery." },
    { question: "Do you offer eggless cakes?", answer: "Yes. Both eggless and egg cake options are available across all flavours including chocolate, black forest, red velvet, and more." },
    { question: "Which cake flavour is most popular for birthdays?", answer: "Chocolate truffle and black forest are the most popular birthday cake flavours. Pinata cakes are trending for children's birthdays and surprise celebrations." },
    { question: "Can I send a cake along with flowers or gifts?", answer: "Yes. You can pair any cake with flowers, chocolates, or build a full gift hamper at checkout — a popular choice for birthdays and anniversaries." },
  ],
},

{
  pageKey: "plants-online",
  categorySlug: "plants-online",
  subcategorySlug: "",
  url: "/plants-online",
  defaultH1: "Plants Online",
  h1: "Plants Online",
  metaTitle: "Buy Plants Online – Same-Day Delivery | RedHeart",
  metaDescription: "Buy indoor & outdoor plants online with same-day delivery across 830+ cities in India. Money plant, snake plant, bonsai & more from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/plants-online",
  metaKeyword: "plants online India, buy plants online, indoor plants online, same day plant delivery, money plant online, snake plant online, gifting plants India",
  footerContent: `<h2>Plants Delivered the Same Day — Across India</h2>
<p>Plants are gifts that last. Unlike flowers that fade and sweets that get eaten, a plant grows — a quiet, daily reminder of the person who sent it. RedHeart brings you healthy, well-potted indoor and outdoor plants starting at ₹399, delivered the same day to 830+ cities across India.</p>

<h2>Why Plants Make Meaningful Gifts</h2>
<p>Gifting a plant says something flowers can't. It says "I want something good to grow in your life." Plants work for housewarmings — a money plant or jade for prosperity and positive energy. For birthdays, a low-maintenance indoor plant is a gift that keeps going long after the day is over. For anniversaries and milestones, a bonsai or peace lily carries elegance and intention.</p>
<p>Plants are also increasingly popular corporate gifts — thoughtful, sustainable, and suitable for office desks and home spaces alike.</p>

<h2>Best Plants by Occasion</h2>
<p>The money plant is one of India's most gifted plants — associated with prosperity and good fortune, making it ideal for housewarmings, Diwali, and new beginnings. The snake plant is a favourite for birthdays and offices — nearly indestructible, air-purifying, and visually striking. Peace lily plants bring a sense of calm and are often gifted for get well soon moments or sympathy. Jade plants symbolise growth and resilience — a thoughtful anniversary or congratulations gift. Bonsai plants are for someone special — a premium, long-lasting gift that commands attention.</p>

<h2>Plants for Festivals and Special Occasions</h2>
<p>Diwali plant gifting is a growing trend — especially money plants and jade, which carry auspicious significance. Housewarming gifts in India almost always include a plant — a symbol of new beginnings and flourishing growth. Mother's Day and Women's Day have seen a rise in plant gifting, particularly peace lilies and flowering plants that combine beauty with purpose. New Year plant gifts reflect a desire for fresh starts and green living.</p>

<h2>Same-Day Plant Delivery Across India</h2>
<p>All plants are carefully packaged to ensure they arrive in perfect condition. Same-day delivery is available across 830+ cities — order in the morning, delivered by evening. Browse by plant type, occasion, or recipient to find the right fit.</p>`,
  faqs: [
    { question: "Can I get same-day plant delivery in India?", answer: "Yes. RedHeart delivers plants the same day across 830+ cities in India. Plants are carefully packaged to arrive in perfect condition." },
    { question: "Which plants are best for gifting in India?", answer: "Money plant, snake plant, jade, peace lily, and bonsai are the most popular gifting plants in India. Money plant and jade are especially popular for housewarmings and Diwali due to their auspicious associations." },
    { question: "Are the plants low-maintenance?", answer: "Most gifting plants on RedHeart — including money plant, snake plant, and jade — are specifically chosen for being low-maintenance and suitable for Indian homes and offices." },
    { question: "Can I send a plant with flowers or a cake?", answer: "Yes. You can combine a plant with flowers, a cake, or chocolates to build a complete gift hamper at checkout." },
    { question: "Which plant is good for a housewarming gift?", answer: "Money plant and jade plant are the most popular housewarming gifts in India — both carry positive energy associations and are easy to care for. Peace lily is also a beautiful and meaningful housewarming option." },
  ],
},

{
  pageKey: "birthday",
  categorySlug: "birthday",
  subcategorySlug: "",
  url: "/birthday",
  defaultH1: "Birthday Gifts Delivery",
  h1: "Birthday Gifts Delivery",
  metaTitle: "Birthday Gifts Online – Same-Day Delivery | RedHeart",
  metaDescription: "Send birthday gifts online with same-day & midnight delivery across 830+ cities in India. Flowers, cakes, plants & hampers from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/birthday",
  metaKeyword: "birthday gifts online India, send birthday gifts, birthday flowers delivery, birthday cake online, same day birthday delivery, birthday gifts for her, birthday gifts for him",
  footerContent: `<h2>Birthday Gifts Delivered the Same Day — Across India</h2>
<p>Birthdays are personal. The right gift doesn't just mark the date — it tells the person they were thought of, that someone took the time to choose something just for them. RedHeart brings you fresh flowers, custom cakes, living plants, and curated gift hampers for every birthday, starting at ₹399 with same-day and midnight delivery across 830+ cities in India.</p>

<h2>The Most Loved Birthday Gifts</h2>
<p>Flowers remain the most instinctive birthday gift — colourful, fresh, and personal. A mixed bouquet or a bunch of roses arrives with instant impact. Birthday cakes turn a gift delivery into a celebration moment — chocolate, black forest, or pinata cakes are perennial favourites. Plants are gaining popularity as birthday gifts for people who value something lasting — a snake plant or money plant for a friend's new home, a bonsai for someone who appreciates the extraordinary.</p>
<p>For those who want to go further, a gift hamper combining flowers, cake, and chocolates creates a complete birthday experience in one delivery.</p>

<h2>Birthday Gifts by Relationship</h2>
<p>For her — roses, pink lilies, and flower-cake combos are always a hit. For him — bold mixed bouquets, chocolate cakes, and plants that make a statement. For a mother — carnations, peace lily plants, and warm-toned flower arrangements. For a best friend — something fun and colourful, like a pinata cake with a mixed bouquet. For a colleague — a desk plant or a gift hamper that's tasteful but thoughtful.</p>

<h2>Midnight Birthday Surprises</h2>
<p>Some birthdays deserve a midnight surprise. RedHeart's midnight delivery means your flowers, cake, or hamper arrives exactly at 12 AM — fresh, unexpected, and unforgettable. Available across hundreds of cities, it's the most popular way to make someone feel truly celebrated.</p>

<h2>Last-Minute Birthday Gifts</h2>
<p>Forgot a birthday? It happens. With same-day delivery available across 830+ Indian cities, you can place an order in the morning and have it delivered before the birthday dinner. Fresh flowers, cakes, and hampers — all available for same-day.</p>`,
  faqs: [
    { question: "What are the best birthday gifts to send online in India?", answer: "Flowers, cakes, plants, and gift hampers are the most popular birthday gifts to send online in India. A flowers-and-cake combo is the most common choice, while plants are popular for people who prefer lasting gifts." },
    { question: "Can I get midnight birthday delivery?", answer: "Yes. RedHeart offers midnight delivery for birthday gifts — flowers, cakes, and hampers. Your order arrives at 12 AM on the birthday, making it a special surprise." },
    { question: "What birthday gifts are best for her?", answer: "Roses, mixed flower bouquets, red velvet or chocolate cakes, and flower-cake combos are the most popular birthday gifts for women. A curated gift hamper with flowers, chocolates, and a personalised note is also a popular choice." },
    { question: "What birthday gifts are good for him?", answer: "Mixed bouquets, chocolate cakes, plants like snake plant or bonsai, and gift hampers are popular birthday gifts for men. A bold red rose bouquet paired with a chocolate truffle cake is a classic choice." },
    { question: "Can I order a same-day birthday gift in India?", answer: "Yes. RedHeart delivers birthday gifts — flowers, cakes, plants, and hampers — the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "anniversary",
  categorySlug: "anniversary",
  subcategorySlug: "",
  url: "/anniversary",
  defaultH1: "Anniversary Gifts Delivery",
  h1: "Anniversary Gifts Delivery",
  metaTitle: "Anniversary Gifts Online – Same-Day Delivery | RedHeart",
  metaDescription: "Send anniversary gifts online with same-day delivery across 830+ cities in India. Roses, red velvet cakes, plants & hampers from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/anniversary",
  metaKeyword: "anniversary gifts online India, anniversary flowers delivery, anniversary cake online, same day anniversary gifts, anniversary gifts for wife, anniversary gifts for husband",
  footerContent: `<h2>Anniversary Gifts Delivered the Same Day — Across India</h2>
<p>An anniversary is a reminder of a promise kept. The gift that marks it should feel as intentional as the day itself. RedHeart brings you fresh roses, red velvet cakes, elegant plants, and curated hampers designed for anniversaries — starting at ₹399 with same-day delivery to 830+ cities across India.</p>

<h2>Most Loved Anniversary Gifts</h2>
<p>Red roses are the defining anniversary gift — romantic, timeless, and unmistakably personal. A bouquet of 12 or 24 red roses, delivered fresh the same day, is the most sent anniversary gift in India. Paired with a red velvet cake or chocolate truffle, it becomes a complete anniversary experience. For something longer-lasting, a jade plant or peace lily carries both beauty and symbolism — a gift that grows alongside the relationship.</p>

<h2>Anniversary Gifts by Relationship</h2>
<p>For a wife — red roses, lily bouquets, and flower-cake combos are the classic choice. A surprise midnight delivery adds to the romance. For a husband — a bold bouquet, a premium cake, and perhaps a bonsai or money plant for his desk. For parents' anniversary — warm flower arrangements in pink and white, paired with a cake that acknowledges the milestone. For a friend's anniversary — a thoughtful gift hamper with flowers, chocolates, and a handwritten card.</p>

<h2>Making the Anniversary Feel Special</h2>
<p>The timing of a gift matters as much as the gift itself. A midnight flower delivery on the anniversary morning, a surprise cake at the office, or an evening hamper at home — each creates a different kind of moment. RedHeart's same-day and midnight delivery options let you choose exactly when and how the gift arrives.</p>`,
  faqs: [
    { question: "What are the best anniversary gifts to send online in India?", answer: "Red roses, red velvet cakes, flower-cake combos, and gift hampers are the most popular anniversary gifts sent online. A bouquet of 24 red roses paired with a cake is the most common anniversary choice." },
    { question: "Can I send anniversary flowers with same-day delivery?", answer: "Yes. RedHeart delivers anniversary flowers, cakes, and hampers the same day across 830+ cities in India. Midnight delivery is also available." },
    { question: "What anniversary gifts are best for a wife?", answer: "Red roses, pink lilies, red velvet cake, and flower-cake combos are the most popular anniversary gifts for a wife. A midnight rose delivery is a romantic surprise that many choose." },
    { question: "What anniversary gifts are suitable for parents?", answer: "Warm flower arrangements in pink and white, anniversary cakes with custom messages, and plants like peace lily or jade are thoughtful anniversary gifts for parents." },
    { question: "What plants make good anniversary gifts?", answer: "Jade plant, peace lily, and bonsai are popular anniversary plant gifts. They symbolise growth, longevity, and beauty — all meaningful for an anniversary." },
  ],
},

{
  pageKey: "wedding",
  categorySlug: "wedding",
  subcategorySlug: "",
  url: "/wedding",
  defaultH1: "Wedding Gifts Online",
  h1: "Wedding Gifts Online",
  metaTitle: "Wedding Gifts Online – Same-Day Delivery | RedHeart",
  metaDescription: "Send wedding gifts online with same-day delivery across 830+ cities in India. Fresh flowers, cakes, plants & gift hampers from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/wedding",
  metaKeyword: "wedding gifts online India, wedding flowers delivery, wedding gift hamper, same day wedding gifts, wedding plants online, send wedding gift India",
  footerContent: `<h2>Wedding Gifts Delivered the Same Day — Across India</h2>
<p>A wedding is one of life's biggest moments. The gift you send should reflect that — thoughtful, beautiful, and memorable. RedHeart offers fresh flower arrangements, custom cakes, elegant plants, and curated gift hampers for weddings, starting at ₹399 with same-day delivery to 830+ cities across India.</p>

<h2>Most Loved Wedding Gift Ideas</h2>
<p>Fresh flower bouquets and arrangements are among the most gifted items at Indian weddings — roses, lilies, and carnations in white, red, and mixed colours that complement the celebration. Plants like peace lily, bonsai, and money plant are increasingly popular wedding gifts — they symbolise new beginnings, prosperity, and long-term growth, making them deeply appropriate for the occasion. Gift hampers combining flowers, sweets, and plants are a modern wedding gift that works for both the bride and groom.</p>

<h2>Flowers and Plants That Suit Weddings</h2>
<p>White lilies and roses are classic wedding flowers — elegant, fragrant, and appropriate for the formality of the occasion. Mixed carnation bouquets in pink and white are popular for gifting at wedding receptions. For plants, peace lily stands out — its white blooms are wedding-appropriate, and the plant symbolises harmony and new beginnings. Bonsai plants make premium wedding gifts — visually striking and long-lasting.</p>

<h2>Wedding Gifts for the Couple</h2>
<p>When gifting a couple, think in pairs. A matching set of plants, a flower-and-plant combo, or a hamper with items for their new home makes the gift feel considered. Plants are particularly thoughtful for newlyweds setting up their first home — a living gift that grows with them.</p>`,
  faqs: [
    { question: "What are the best wedding gifts to send online in India?", answer: "Flowers, plants, and gift hampers are the most popular wedding gifts sent online. White lilies, peace lily plants, and flower-plant combos are especially popular for weddings." },
    { question: "Can I send wedding flowers with same-day delivery?", answer: "Yes. RedHeart delivers wedding flowers, plants, and gift hampers the same day across 830+ cities in India." },
    { question: "Which plants make good wedding gifts?", answer: "Peace lily, bonsai, jade plant, and money plant are popular wedding gift plants. They symbolise harmony, growth, and prosperity — all meaningful for a new marriage." },
    { question: "What flowers are suitable for a wedding gift?", answer: "White lilies, roses, mixed carnations, and roses-and-lily bouquets are the most suitable wedding gift flowers. White and soft pink tones work best for the occasion." },
    { question: "Can I send a gift hamper as a wedding gift?", answer: "Yes. RedHeart gift hampers combine flowers, plants, and other items into a complete wedding gift. You can customise the hamper at checkout." },
  ],
},

{
  pageKey: "gift-hampers",
  categorySlug: "gift-hampers",
  subcategorySlug: "",
  url: "/gift-hampers",
  defaultH1: "Gift Hampers Online",
  h1: "Gift Hampers Online",
  metaTitle: "Gift Hampers Online – Same-Day Delivery | RedHeart",
  metaDescription: "Order premium gift hampers online with same-day delivery across 830+ cities in India. Flowers, cakes, plants & chocolates combined from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/gift-hampers",
  metaKeyword: "gift hampers online India, send gift hamper India, same day gift hamper delivery, birthday gift hamper, anniversary gift hamper, premium gift baskets India",
  footerContent: `<h2>Gift Hampers Delivered the Same Day — Across India</h2>
<p>When one gift isn't enough, a hamper says everything. RedHeart gift hampers combine the best of flowers, cakes, plants, and chocolates into a single, curated delivery — for every occasion, every relationship, and every budget. Starting at ₹399 with same-day delivery to 830+ cities across India.</p>

<h2>Why Gift Hampers Are the Most Complete Gift</h2>
<p>A gift hamper removes the question of "is this enough?" — because it's more than one thing. It's a bouquet of roses and a chocolate cake. It's a money plant and a box of premium chocolates. It's a red velvet cake with a handwritten card. The combination makes the gift feel abundant, thoughtful, and personal — without requiring hours of planning. That's why gift hampers are the most popular choice for birthdays, anniversaries, and corporate gifting in India.</p>

<h2>Gift Hampers for Every Occasion</h2>
<p>Birthday hampers combine colourful flowers, a favourite cake flavour, and sweet treats for a complete birthday surprise. Anniversary hampers lean romantic — red roses, red velvet cake, and a plant that lasts beyond the celebration. Wedding hampers are premium and elegant — white flowers, a showpiece plant, and quality chocolates. Housewarming hampers are warm and practical — a money plant or jade, paired with sweets that welcome the new home.</p>

<h2>Gift Hampers for Every Relationship</h2>
<p>For her — flowers, chocolates, and a scented candle or plant. For him — a bold bouquet, a rich chocolate cake, and a striking plant. For parents — a warm, dignified hamper with classic flowers, a cake, and a peace lily. For a friend — something fun and colourful that reflects their personality. For a colleague — a tasteful hamper that's professional yet personal.</p>

<h2>Same-Day Gift Hamper Delivery</h2>
<p>All hampers are assembled fresh and dispatched for same-day delivery across 830+ cities in India. Browse by occasion or relationship, or build your own hamper at checkout.</p>`,
  faqs: [
    { question: "What is included in a RedHeart gift hamper?", answer: "RedHeart gift hampers typically combine flowers, cakes, plants, and chocolates. The exact combination depends on the hamper you choose. You can also build a custom hamper at checkout." },
    { question: "Can I get a gift hamper delivered the same day in India?", answer: "Yes. RedHeart delivers gift hampers the same day across 830+ cities in India. Midnight delivery is also available for birthday and anniversary hampers." },
    { question: "What occasion are gift hampers best suited for?", answer: "Gift hampers work for virtually every occasion — birthdays, anniversaries, weddings, housewarmings, Diwali, Raksha Bandhan, Mother's Day, and corporate gifting. They are the most versatile gift option available." },
    { question: "Can I customise a gift hamper?", answer: "Yes. At checkout, you can choose to add flowers, a cake, plants, or chocolates to create a personalised hamper for your recipient." },
    { question: "What is the starting price of gift hampers on RedHeart?", answer: "Gift hampers on RedHeart start at ₹399. Premium hampers with flowers, cakes, and plants are also available for larger budgets." },
  ],
},

// ─────────────────────────────────────────────────────────────────────────────
// FLOWERS SUBCATEGORIES
// ─────────────────────────────────────────────────────────────────────────────

{
  pageKey: "flowers/roses",
  categorySlug: "flowers",
  subcategorySlug: "roses",
  url: "/flowers/roses",
  defaultH1: "Roses Delivery",
  h1: "Roses Delivery",
  metaTitle: "Send Roses Online – Same-Day Delivery | RedHeart",
  metaDescription: "Order fresh roses online with same-day delivery across 830+ cities in India. Red, pink & mixed rose bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/roses",
  metaKeyword: "roses online India, send roses online, red roses delivery India, rose bouquet online, buy roses online India, same day rose delivery",
  footerContent: `<h2>Fresh Roses Delivered the Same Day</h2>
<p>Roses are the world's most recognised symbol of love, appreciation, and celebration. Whether it's a deep red bouquet for an anniversary, soft pink roses for a birthday, or white roses as a gesture of respect — every colour carries meaning. RedHeart delivers fresh rose bouquets starting at ₹399 with same-day delivery to 830+ cities across India.</p>
<h2>Roses for Every Occasion</h2>
<p>Red roses are the natural choice for Valentine's Day, anniversaries, and romantic gestures. Pink roses carry warmth and affection — perfect for birthdays, Mother's Day, and friendships. Yellow roses celebrate joy and new beginnings. White roses work for weddings, sympathy, and get-well gestures. Mixed rose bouquets bring colour and vibrancy to any celebration.</p>
<h2>How to Choose the Right Rose Bouquet</h2>
<p>Consider the occasion and the relationship. A dozen red roses is a classic romantic gesture. A large mixed bouquet works for birthdays and celebrations. Single-stem roses make meaningful "just because" gifts. For festivals like Raksha Bandhan and Diwali, mixed or pink rose bouquets work beautifully.</p>`,
  faqs: [
    { question: "Which colour roses are best for an anniversary?", answer: "Red roses are the classic anniversary choice, symbolising deep love and romance. For a softer touch, pink roses or a red-and-white mixed bouquet also work beautifully." },
    { question: "Can I get rose bouquet delivery the same day?", answer: "Yes. RedHeart delivers fresh rose bouquets the same day across 830+ cities in India. Midnight rose delivery is also available." },
    { question: "What is the price of a rose bouquet on RedHeart?", answer: "Rose bouquets on RedHeart start at ₹399. The price varies based on the number of roses and arrangement type." },
  ],
},

{
  pageKey: "flowers/lilies",
  categorySlug: "flowers",
  subcategorySlug: "lilies",
  url: "/flowers/lilies",
  defaultH1: "Lilies Delivery",
  h1: "Lilies Delivery",
  metaTitle: "Send Lilies Online – Same-Day Delivery | RedHeart",
  metaDescription: "Order fresh lilies online with same-day delivery across 830+ cities in India. White, pink & mixed lily bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/lilies",
  metaKeyword: "lilies online India, send lilies online, lily bouquet delivery, white lilies delivery India, same day lily delivery, buy lilies online",
  footerContent: `<h2>Fresh Lilies Delivered the Same Day</h2>
<p>Lilies carry a quiet, lasting elegance that few flowers can match. Their fragrance fills a room, and their blooms last longer than most cut flowers — making them a gift that keeps giving for days. RedHeart delivers fresh lily bouquets starting at ₹399 with same-day delivery across 830+ cities in India.</p>
<h2>When to Gift Lilies</h2>
<p>White lilies are the go-to for sympathy, get well soon, and weddings — their clean, calm beauty conveys respect and care. Pink and mixed lilies are vibrant and celebratory — wonderful for birthdays, Mother's Day, and thank-you gestures. Lilies also make excellent housewarming flowers — elegant, fragrant, and long-lasting in a new home.</p>
<h2>Roses and Lily Combinations</h2>
<p>A roses-and-lily bouquet combines the romance of roses with the elegance of lilies — one of the most popular combinations for anniversaries and special occasions. The contrast of colours and textures makes these arrangements visually striking and highly gifted.</p>`,
  faqs: [
    { question: "What occasions are lilies best suited for?", answer: "Lilies are ideal for weddings, anniversaries, get well soon gestures, sympathy, housewarmings, and Mother's Day. White lilies suit formal or solemn occasions; pink and mixed lilies suit celebrations." },
    { question: "How long do lilies last after delivery?", answer: "Fresh lilies typically last 7–10 days after delivery when properly cared for — longer than most cut flowers, making them a gift that continues to delight." },
    { question: "Can I order lilies for same-day delivery?", answer: "Yes. RedHeart delivers fresh lily bouquets the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "flowers/red-roses",
  categorySlug: "flowers",
  subcategorySlug: "red-roses",
  url: "/flowers/red-roses",
  defaultH1: "Red Roses Delivery",
  h1: "Red Roses Delivery",
  metaTitle: "Send Red Roses Online – Same-Day Delivery | RedHeart",
  metaDescription: "Order fresh red roses online with same-day & midnight delivery across 830+ cities in India. Red rose bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/red-roses",
  metaKeyword: "red roses online India, send red roses, red rose bouquet delivery, buy red roses online India, same day red rose delivery, red roses for anniversary",
  footerContent: `<h2>Fresh Red Roses Delivered the Same Day</h2>
<p>Red roses have meant love for centuries — and nothing has replaced them. A bouquet of red roses is still the most powerful romantic gesture you can make. RedHeart delivers fresh red rose bouquets, the same day, across 830+ cities in India — starting at ₹399.</p>
<h2>When to Send Red Roses</h2>
<p>Valentine's Day and Rose Day are the obvious occasions, but red roses work year-round. Anniversary mornings, surprise deliveries to an office, midnight birthday surprises, and "I'm sorry" gestures — red roses say what sometimes words can't. A dozen red roses is a classic; 24 makes a statement; a single red rose is intimate and deliberate.</p>
<h2>Same-Day and Midnight Red Rose Delivery</h2>
<p>Midnight red rose delivery is one of RedHeart's most popular services — your bouquet arrives exactly at 12 AM on Valentine's Day, an anniversary, or a birthday morning. Same-day delivery ensures fresh roses reach anywhere in India within hours of your order.</p>`,
  faqs: [
    { question: "Can I send red roses on Valentine's Day with same-day delivery?", answer: "Yes. RedHeart delivers red roses on Valentine's Day with same-day and midnight delivery across 830+ cities in India. We recommend ordering early on peak days." },
    { question: "How many red roses should I send for an anniversary?", answer: "A dozen (12) red roses is the classic anniversary bouquet. 24 roses make a larger, more dramatic statement. Single red roses are intimate and meaningful for quieter gestures." },
    { question: "Are the red roses fresh at the time of delivery?", answer: "Yes. All roses are sourced fresh and prepared on the day of delivery, ensuring they arrive in full bloom." },
  ],
},

{
  pageKey: "flowers/birthday",
  categorySlug: "flowers",
  subcategorySlug: "birthday",
  url: "/flowers/birthday",
  defaultH1: "Birthday Flowers Delivery",
  h1: "Birthday Flowers Delivery",
  metaTitle: "Birthday Flowers Online – Same-Day Delivery | RedHeart",
  metaDescription: "Send birthday flowers online with same-day & midnight delivery across 830+ cities in India. Fresh bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/birthday",
  metaKeyword: "birthday flowers online India, send birthday flowers, birthday bouquet delivery, same day birthday flowers, flowers for birthday gift India",
  footerContent: `<h2>Birthday Flowers Delivered the Same Day</h2>
<p>A birthday bouquet is one of the most personal gifts you can send. It arrives with colour, fragrance, and the message that you remembered — and took the time to do something about it. RedHeart delivers fresh birthday flower bouquets starting at ₹399 with same-day and midnight delivery across 830+ cities in India.</p>
<h2>Best Birthday Flowers</h2>
<p>Mixed bouquets in vibrant colours — reds, pinks, yellows, and oranges — are the most popular birthday choice. Roses work for romantic birthday gestures. Lilies add elegance for milestone birthdays. Sunflowers and gerberas bring cheer and energy. The best birthday bouquet matches the personality of the person receiving it.</p>
<h2>Midnight Birthday Flower Delivery</h2>
<p>Midnight flower delivery on a birthday is one of the most thoughtful surprises you can arrange. Your bouquet arrives at exactly 12 AM — fresh, beautiful, and the first thing they see on their birthday. Available across hundreds of Indian cities through RedHeart.</p>`,
  faqs: [
    { question: "Which flowers are best for a birthday gift?", answer: "Mixed bouquets, roses, lilies, and gerberas are the most popular birthday flowers. Bright colours like pink, red, and yellow work best for the celebratory mood of a birthday." },
    { question: "Can I get birthday flowers delivered at midnight?", answer: "Yes. RedHeart offers midnight birthday flower delivery — your bouquet arrives at 12 AM across hundreds of Indian cities." },
    { question: "Can I pair birthday flowers with a cake?", answer: "Yes. Add a cake, chocolates, or a plant at checkout to create a complete birthday gift alongside the flowers." },
  ],
},

{
  pageKey: "flowers/anniversary",
  categorySlug: "flowers",
  subcategorySlug: "anniversary",
  url: "/flowers/anniversary",
  defaultH1: "Anniversary Flowers Delivery",
  h1: "Anniversary Flowers Delivery",
  metaTitle: "Anniversary Flowers Online – Same-Day Delivery | RedHeart",
  metaDescription: "Send anniversary flowers online with same-day & midnight delivery across 830+ cities in India. Roses, lilies & mixed bouquets from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/anniversary",
  metaKeyword: "anniversary flowers online India, send anniversary flowers, anniversary rose bouquet, same day anniversary flower delivery, anniversary flowers for wife",
  footerContent: `<h2>Anniversary Flowers Delivered the Same Day</h2>
<p>An anniversary bouquet is a romantic statement — that the love hasn't dimmed, that the day matters, that the person is worth celebrating. RedHeart delivers fresh anniversary flower arrangements starting at ₹399 with same-day and midnight delivery across 830+ cities in India.</p>
<h2>Best Flowers for an Anniversary</h2>
<p>Red roses are the defining anniversary flower — romantic, bold, and unmistakable. A bouquet of 12 or 24 long-stem red roses is a classic statement. Lilies carry elegance and refinement — white or pink lilies paired with roses create a striking anniversary arrangement. A roses-and-lily combination is one of the most popular anniversary bouquets ordered on RedHeart.</p>
<h2>Make the Anniversary Morning Special</h2>
<p>A surprise morning flower delivery or a midnight bouquet when the anniversary begins — either creates a moment your partner will remember. Pair the flowers with a red velvet cake or chocolates for a complete anniversary experience delivered right to their door.</p>`,
  faqs: [
    { question: "What flowers should I send for an anniversary?", answer: "Red roses are the classic anniversary flower. Roses-and-lily combinations are also very popular. For a more personal touch, choose your partner's favourite flower or colour." },
    { question: "Can I get anniversary flowers delivered at midnight?", answer: "Yes. RedHeart offers midnight anniversary flower delivery — your bouquet arrives at 12 AM to mark the start of the anniversary." },
    { question: "Should I pair anniversary flowers with a gift?", answer: "Pairing flowers with a red velvet cake, chocolates, or a gift hamper creates a more complete anniversary gift. You can add these at checkout on RedHeart." },
  ],
},

{
  pageKey: "flowers/valentines-day",
  categorySlug: "flowers",
  subcategorySlug: "valentines-day",
  url: "/flowers/valentines-day",
  defaultH1: "Valentine's Day Flowers Delivery",
  h1: "Valentine's Day Flowers Delivery",
  metaTitle: "Valentine's Day Flowers – Same-Day Delivery | RedHeart",
  metaDescription: "Order Valentine's Day flowers online with same-day & midnight delivery across 830+ cities in India. Red roses & bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/valentines-day",
  metaKeyword: "valentine's day flowers India, send flowers on valentine's day, red roses valentine delivery, valentine flowers online India, same day valentine flower delivery",
  footerContent: `<h2>Valentine's Day Flowers — Same-Day Delivery Across India</h2>
<p>Valentine's Day is the one day when flowers speak louder than words. A fresh bouquet of red roses, delivered to her home, office, or hostel room, says everything an elaborate message might not. RedHeart delivers Valentine's Day flowers starting at ₹399 with same-day and midnight delivery across 830+ cities in India.</p>
<h2>Most Popular Valentine's Day Flowers</h2>
<p>Red roses are the undisputed Valentine's Day flower — a dozen or 24 long-stem roses remain the most ordered gift. Pink roses and mixed bouquets are popular for friendships and lighter romantic gestures. Roses paired with lilies make a premium Valentine's arrangement. Add a chocolate cake or heart-shaped box of chocolates at checkout for a complete Valentine's Day gift.</p>
<h2>Valentine's Week Flowers</h2>
<p>Valentine's Day is only the highlight — Rose Day, Propose Day, Chocolate Day, Teddy Day, Promise Day, Hug Day, and Kiss Day each have their own flower traditions. RedHeart has curated collections for each day of Valentine's Week, all available for same-day delivery.</p>`,
  faqs: [
    { question: "Which flowers are most popular on Valentine's Day in India?", answer: "Red roses are the most popular Valentine's Day flower in India. Pink roses and mixed bouquets are popular for lighter romantic gestures. Roses paired with lilies make premium Valentine's arrangements." },
    { question: "Can I get Valentine's Day flowers delivered the same day?", answer: "Yes. RedHeart delivers Valentine's Day flowers same-day across 830+ cities. We recommend ordering early on Valentine's Day as demand is very high." },
    { question: "What flowers are sent on Rose Day?", answer: "Red roses are sent on Rose Day (February 7), the first day of Valentine's Week. Pink roses are given to friends; red roses to romantic partners." },
  ],
},

{
  pageKey: "flowers/mothers-day",
  categorySlug: "flowers",
  subcategorySlug: "mothers-day",
  url: "/flowers/mothers-day",
  defaultH1: "Mother's Day Flowers Delivery",
  h1: "Mother's Day Flowers Delivery",
  metaTitle: "Mother's Day Flowers Online – Same-Day Delivery | RedHeart",
  metaDescription: "Send Mother's Day flowers online with same-day delivery across 830+ cities in India. Pink roses, carnations & bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/mothers-day",
  metaKeyword: "mother's day flowers India, send flowers for mother's day, carnations for mother's day, pink roses for mom, mother's day flower delivery India",
  footerContent: `<h2>Mother's Day Flowers — Delivered to Her Door</h2>
<p>Mother's Day is about making her feel as valued as she makes you feel every day. A fresh bouquet delivered to her door — while she's still in the morning of her day — is one of the most impactful ways to show it. RedHeart delivers Mother's Day flowers starting at ₹399 with same-day delivery across 830+ cities in India.</p>
<h2>Best Flowers for Mother's Day</h2>
<p>Carnations are the traditional Mother's Day flower — pink carnations for a living mother, white for remembrance. Pink roses express love, warmth, and affection in the most natural way. Mixed bouquets in soft pinks, whites, and yellows carry a brightness that matches the mood of the day. Lilies add elegance and fragrance — a gift that fills a room and lasts for days.</p>
<h2>Pair Flowers with a Gift</h2>
<p>A flower bouquet paired with a cake, a peace lily plant, or a chocolates box creates a complete Mother's Day gift. The peace lily is especially meaningful — a living plant that symbolises care, calm, and beauty, much like the mothers we celebrate.</p>`,
  faqs: [
    { question: "Which flowers are best for Mother's Day?", answer: "Carnations, pink roses, and mixed bouquets are the most popular Mother's Day flowers. Carnations are the traditional Mother's Day flower — pink for a living mother." },
    { question: "Can I send Mother's Day flowers with same-day delivery?", answer: "Yes. RedHeart delivers Mother's Day flowers the same day across 830+ cities in India." },
    { question: "What plant is a good Mother's Day gift?", answer: "Peace lily is the most popular Mother's Day plant gift — it has beautiful white blooms, is easy to care for, and symbolises care and calm." },
  ],
},

{
  pageKey: "flowers/for-her",
  categorySlug: "flowers",
  subcategorySlug: "for-her",
  url: "/flowers/for-her",
  defaultH1: "Flowers for Her Delivery",
  h1: "Flowers for Her Delivery",
  metaTitle: "Flowers for Her – Same-Day Delivery | RedHeart",
  metaDescription: "Send flowers for her online with same-day delivery across 830+ cities in India. Roses, lilies & mixed bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/for-her",
  metaKeyword: "flowers for her India, send flowers to girlfriend, flowers for wife delivery, flowers for mom online, flowers for women India, same day flowers for her",
  footerContent: `<h2>Flowers for Her — Delivered the Same Day</h2>
<p>The right flowers for her aren't just about the flowers — they're about the thought, the timing, and the feeling they carry. Whether she's your partner, mother, sister, friend, or colleague, a well-chosen bouquet says you know her and you care. RedHeart delivers flowers for her starting at ₹399 with same-day delivery across 830+ cities in India.</p>
<h2>Flowers She'll Love</h2>
<p>For a romantic partner — red roses, pink roses, or a roses-and-lily combination. For a mother — pink carnations, soft mixed bouquets, or a peace lily plant. For a sister — cheerful mixed bouquets in bright colours. For a best friend — something vibrant and fun, like sunflowers or mixed gerberas. For a colleague — a tasteful mixed arrangement that feels professional yet personal.</p>
<h2>Every Occasion, Perfectly Covered</h2>
<p>Birthday, anniversary, Valentine's Day, Mother's Day, Women's Day, or just because — there's a perfect bouquet for every moment. Browse by occasion or choose by her favourite colour to find the right fit.</p>`,
  faqs: [
    { question: "What flowers do women love the most?", answer: "Roses, lilies, and mixed bouquets are the most loved flowers among women. Pink roses are particularly popular — they convey warmth, affection, and appreciation without being overly formal." },
    { question: "What flowers are best for a girlfriend?", answer: "Red roses for romance, pink roses for warmth, and roses-and-lily combinations for something more elaborate are the most popular choices for girlfriends." },
    { question: "Can I send flowers to her office?", answer: "Yes. RedHeart delivers to home and office addresses across 830+ cities. A flower delivery at her office is a public, joyful gesture that many find especially memorable." },
  ],
},

{
  pageKey: "flowers/for-him",
  categorySlug: "flowers",
  subcategorySlug: "for-him",
  url: "/flowers/for-him",
  defaultH1: "Flowers for Him Delivery",
  h1: "Flowers for Him Delivery",
  metaTitle: "Flowers for Him – Same-Day Delivery | RedHeart",
  metaDescription: "Send flowers for him online with same-day delivery across 830+ cities in India. Bold bouquets, roses & plants from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/for-him",
  metaKeyword: "flowers for him India, send flowers to boyfriend, flowers for husband delivery, flowers for men India, same day flowers for him, buy flowers for men",
  footerContent: `<h2>Flowers for Him — Delivered the Same Day</h2>
<p>Flowers for men are more popular than ever — and for good reason. A bold, well-chosen bouquet is a memorable gift for a boyfriend, husband, father, or brother. RedHeart delivers flowers for him starting at ₹399 with same-day delivery across 830+ cities in India.</p>
<h2>Best Flowers for Men</h2>
<p>Bold mixed bouquets with deep reds, oranges, and purples make strong, masculine arrangements. Red roses remain the most gifted flower for a romantic male partner. Sunflowers and gerberas are cheerful, energetic gifts for male friends and colleagues. For fathers and older men, classic arrangements with lilies and carnations carry dignity and warmth.</p>
<h2>Pair With a Cake or Plant</h2>
<p>Pairing flowers with a chocolate truffle cake or a striking plant like a bonsai or snake plant creates a more complete gift for him — something that matches his space and personality beyond the bouquet.</p>`,
  faqs: [
    { question: "Is it appropriate to send flowers to a man?", answer: "Absolutely. Flowers for men are increasingly popular in India — for birthdays, anniversaries, Father's Day, and as romantic gestures. A bold bouquet is a memorable and thoughtful gift." },
    { question: "What flowers are best for a boyfriend or husband?", answer: "Red roses are the classic choice for a romantic male partner. Bold mixed bouquets with deep reds and oranges are also popular. For a more unique gift, pair flowers with a chocolate cake." },
    { question: "What plant goes well with flowers as a gift for him?", answer: "Snake plant and bonsai are popular plant gifts for men — both are visually striking, low-maintenance, and suitable for a desk or living space." },
  ],
},

// ─────────────────────────────────────────────────────────────────────────────
// CAKES SUBCATEGORIES
// ─────────────────────────────────────────────────────────────────────────────

{
  pageKey: "cakes/chocolate",
  categorySlug: "cakes",
  subcategorySlug: "chocolate",
  url: "/cakes/chocolate",
  defaultH1: "Order Chocolate Cakes",
  h1: "Order Chocolate Cakes",
  metaTitle: "Order Chocolate Cake Online – Same-Day Delivery | RedHeart",
  metaDescription: "Order fresh chocolate cakes online with same-day delivery across 830+ cities in India. Truffle, ganache & more from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/chocolate",
  metaKeyword: "chocolate cake online India, order chocolate cake, chocolate truffle cake delivery, same day chocolate cake, buy chocolate cake online India",
  footerContent: `<h2>Fresh Chocolate Cakes — Delivered the Same Day</h2>
<p>Chocolate cake is the universally loved celebration cake — rich, indulgent, and virtually impossible to dislike. Whether it's a birthday, an anniversary, or a "just because" moment, a fresh chocolate cake delivered the same day makes any occasion better. RedHeart delivers chocolate cakes starting at ₹399 across 830+ cities in India.</p>
<h2>Types of Chocolate Cakes</h2>
<p>Chocolate truffle is the most ordered cake on RedHeart — dense, ganache-covered, and deeply satisfying. Chocolate mousse cakes are lighter and airier — a popular choice for summer birthdays. Dark chocolate cakes with chocolate shavings are the premium choice for chocolate lovers who want intensity. Chocolate-based pinata cakes are the most fun — filled with chocolates and candies that spill out when cut.</p>
<h2>Perfect Occasions for Chocolate Cake</h2>
<p>Birthdays are the most common occasion for a chocolate cake — it's the crowd-pleaser that rarely disappoints. Office celebrations, children's parties, anniversaries, and even Diwali gifting all see chocolate cake as the go-to choice. Pair with a flower bouquet for a complete gift delivery.</p>`,
  faqs: [
    { question: "What is the most popular chocolate cake for birthdays?", answer: "Chocolate truffle cake is the most popular birthday cake in India — rich ganache, moist sponge, and a presentation that suits any celebration." },
    { question: "Can I order a chocolate cake for same-day delivery?", answer: "Yes. RedHeart delivers fresh chocolate cakes the same day across 830+ cities in India." },
    { question: "Are eggless chocolate cakes available?", answer: "Yes. Eggless chocolate cake options are available across all varieties — truffle, mousse, and more." },
  ],
},

{
  pageKey: "cakes/black-forest",
  categorySlug: "cakes",
  subcategorySlug: "black-forest",
  url: "/cakes/black-forest",
  defaultH1: "Order Black Forest Cakes",
  h1: "Order Black Forest Cakes",
  metaTitle: "Order Black Forest Cake Online – Same-Day Delivery | RedHeart",
  metaDescription: "Order fresh black forest cakes online with same-day delivery across 830+ cities in India. Cream, cherries & chocolate from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/black-forest",
  metaKeyword: "black forest cake online India, order black forest cake, same day black forest cake delivery, fresh black forest cake, buy black forest cake online",
  footerContent: `<h2>Fresh Black Forest Cakes — Delivered the Same Day</h2>
<p>Black forest cake is a timeless classic — the contrast of rich chocolate sponge, light whipped cream, and tart cherries is instantly recognisable and universally loved. It's been a birthday staple in Indian households for decades, and for good reason. RedHeart delivers fresh black forest cakes starting at ₹399 with same-day delivery across 830+ cities in India.</p>
<h2>Why Black Forest Remains India's Most Loved Cake</h2>
<p>Black forest cake occupies a unique place in Indian celebrations. It's the cake that older generations recognise and younger generations love equally — bridging tastes, generations, and occasions. Its visual impact — white cream with chocolate shavings and red cherries — makes it as beautiful as it is delicious. For birthdays, family gatherings, and office celebrations, black forest is always a safe, impressive choice.</p>
<h2>Pair With Flowers for a Complete Gift</h2>
<p>A black forest cake paired with a red rose bouquet or a mixed flower arrangement creates a complete, memorable gift. Available for combined same-day delivery on RedHeart.</p>`,
  faqs: [
    { question: "Why is black forest cake so popular in India?", answer: "Black forest cake has been a birthday staple in India for decades. Its combination of chocolate sponge, cream, and cherries is universally loved across age groups, making it the most recognised celebration cake." },
    { question: "Can I order a black forest cake for same-day delivery?", answer: "Yes. RedHeart delivers fresh black forest cakes the same day across 830+ cities in India." },
    { question: "Is black forest cake available in eggless version?", answer: "Yes. Eggless black forest cake is available on RedHeart across most cities." },
  ],
},

{
  pageKey: "cakes/red-velvet",
  categorySlug: "cakes",
  subcategorySlug: "red-velvet",
  url: "/cakes/red-velvet",
  defaultH1: "Order Red Velvet Cakes",
  h1: "Order Red Velvet Cakes",
  metaTitle: "Order Red Velvet Cake Online – Same-Day Delivery | RedHeart",
  metaDescription: "Order fresh red velvet cakes online with same-day delivery across 830+ cities in India. Cream cheese frosting & more from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/red-velvet",
  metaKeyword: "red velvet cake online India, order red velvet cake, same day red velvet cake delivery, fresh red velvet cake, red velvet cake for anniversary",
  footerContent: `<h2>Fresh Red Velvet Cakes — Delivered the Same Day</h2>
<p>Red velvet cake is the premium choice — visually stunning with its deep crimson colour and cream cheese frosting, and unmistakably refined in taste. It's the cake you order when the occasion deserves something more than ordinary. RedHeart delivers fresh red velvet cakes starting at ₹399 with same-day delivery across 830+ cities in India.</p>
<h2>When to Choose Red Velvet</h2>
<p>Red velvet is the top choice for anniversaries — its romantic red colour and elegant presentation make it a natural fit. Valentine's Day orders for red velvet cake spike every year. It's also popular for milestone birthdays and for gifting to someone who appreciates the finer things. Paired with red roses, it creates the most romantic gift combination on the platform.</p>
<h2>What Makes Red Velvet Special</h2>
<p>The cream cheese frosting is what separates red velvet from other cakes — tangy, smooth, and light in contrast to the moist red sponge. The visual impact when the cake is cut — revealing the vivid red interior against white frosting — is a moment in itself.</p>`,
  faqs: [
    { question: "What occasion is red velvet cake best for?", answer: "Red velvet cake is most popular for anniversaries and Valentine's Day due to its romantic red colour. It's also excellent for milestone birthdays and premium gifting." },
    { question: "Can I order a red velvet cake for same-day delivery?", answer: "Yes. RedHeart delivers fresh red velvet cakes the same day across 830+ cities in India." },
    { question: "What's the best flower to pair with a red velvet cake?", answer: "Red roses are the natural pairing for red velvet cake — together they make the most romantic gift combination for anniversaries and Valentine's Day." },
  ],
},

{
  pageKey: "cakes/birthday",
  categorySlug: "cakes",
  subcategorySlug: "birthday",
  url: "/cakes/birthday",
  defaultH1: "Order Birthday Cakes",
  h1: "Order Birthday Cakes",
  metaTitle: "Order Birthday Cake Online – Same-Day Delivery | RedHeart",
  metaDescription: "Order fresh birthday cakes online with same-day & midnight delivery across 830+ cities in India. Chocolate, black forest, pinata & more from ₹399.",
  canonicalUrl: "https://www.redheart.in/cakes/birthday",
  metaKeyword: "birthday cake online India, order birthday cake, same day birthday cake delivery, midnight birthday cake, fresh birthday cake online, birthday cake delivery India",
  footerContent: `<h2>Fresh Birthday Cakes — Delivered the Same Day</h2>
<p>The birthday cake is the centrepiece of every celebration. It's the moment everyone gathers around, the candles are lit, the wish is made. RedHeart delivers fresh birthday cakes in every flavour starting at ₹399 with same-day and midnight delivery across 830+ cities in India.</p>
<h2>Most Popular Birthday Cake Flavours</h2>
<p>Chocolate truffle and black forest are the perennial birthday favourites — rich, crowd-pleasing, and instantly celebratory. Pinata cakes have become the most fun birthday choice — filled with chocolates and candies, they turn cake-cutting into a surprise. Red velvet is the premium birthday choice for adults. Butterscotch and vanilla are lighter options that suit all ages.</p>
<h2>Midnight Birthday Cake Delivery</h2>
<p>Midnight cake delivery is one of RedHeart's most loved services — a fresh cake arrives exactly at 12 AM, making it the first surprise of the birthday. Available across hundreds of Indian cities, it's the most memorable way to start a birthday celebration.</p>`,
  faqs: [
    { question: "Which birthday cake flavour is most popular in India?", answer: "Chocolate truffle and black forest are the most popular birthday cake flavours in India. Pinata cakes are the most trending choice for fun, surprise-style celebrations." },
    { question: "Can I get a birthday cake delivered at midnight?", answer: "Yes. RedHeart offers midnight birthday cake delivery — your cake arrives at 12 AM on the birthday, fresh and perfectly presented." },
    { question: "Can I send a birthday cake to another city in India?", answer: "Yes. RedHeart delivers birthday cakes across 830+ cities in India with same-day delivery." },
  ],
},

{
  pageKey: "cakes/anniversary",
  categorySlug: "cakes",
  subcategorySlug: "anniversary",
  url: "/cakes/anniversary",
  defaultH1: "Order Anniversary Cakes",
  h1: "Order Anniversary Cakes",
  metaTitle: "Order Anniversary Cake Online – Same-Day Delivery | RedHeart",
  metaDescription: "Order fresh anniversary cakes online with same-day delivery across 830+ cities in India. Red velvet, chocolate & more from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/anniversary",
  metaKeyword: "anniversary cake online India, order anniversary cake, red velvet anniversary cake, same day anniversary cake delivery, anniversary cake for wife, anniversary cake delivery India",
  footerContent: `<h2>Fresh Anniversary Cakes — Delivered the Same Day</h2>
<p>An anniversary cake is more than dessert — it's a continuation of the celebration that began at the wedding. The right cake, delivered at the right time, elevates the entire day. RedHeart delivers fresh anniversary cakes starting at ₹399 with same-day and midnight delivery across 830+ cities in India.</p>
<h2>Best Cakes for an Anniversary</h2>
<p>Red velvet is the most popular anniversary cake choice — its romantic red colour and cream cheese frosting make it the natural fit. Chocolate truffle cake is a close second — indulgent and satisfying for couples who prefer classic flavours. Ferrero Rocher cake is the premium anniversary option — luxurious, visually impressive, and a crowd favourite for milestone anniversaries. Pair any anniversary cake with red roses for a complete romantic gift delivery.</p>`,
  faqs: [
    { question: "Which cake is best for an anniversary?", answer: "Red velvet cake is the most popular anniversary cake due to its romantic appearance. Ferrero Rocher cake is the premium choice for milestone anniversaries. Chocolate truffle is ideal for couples who prefer classic flavours." },
    { question: "Can I get an anniversary cake delivered the same day?", answer: "Yes. RedHeart delivers fresh anniversary cakes the same day across 830+ cities in India. Midnight delivery is also available." },
    { question: "Should I pair an anniversary cake with flowers?", answer: "Yes. A red velvet cake paired with 12 or 24 red roses is the most popular anniversary gift combination on RedHeart — romantic, complete, and delivered together." },
  ],
},

// ─────────────────────────────────────────────────────────────────────────────
// PLANTS SUBCATEGORIES
// ─────────────────────────────────────────────────────────────────────────────

{
  pageKey: "plants/money",
  categorySlug: "plants",
  subcategorySlug: "money",
  url: "/plants/money",
  defaultH1: "Money Plant Online",
  h1: "Money Plant Online",
  metaTitle: "Buy Money Plant Online – Same-Day Delivery | RedHeart",
  metaDescription: "Buy money plant online with same-day delivery across 830+ cities in India. Potted, healthy money plants from ₹399. Perfect gifting plant. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/plants/money",
  metaKeyword: "money plant online India, buy money plant, money plant delivery India, same day money plant delivery, money plant gift, potted money plant online",
  footerContent: `<h2>Money Plant — Delivered the Same Day Across India</h2>
<p>The money plant is India's most gifted indoor plant — and for good reason. Associated with prosperity, good luck, and positive energy, it's the perfect plant for housewarmings, Diwali, new office openings, and new beginnings of all kinds. RedHeart delivers healthy, well-potted money plants starting at ₹399 with same-day delivery across 830+ cities in India.</p>
<h2>Why Money Plant is India's Favourite Gift Plant</h2>
<p>Money plant has deep roots in Indian gifting culture. It's believed to bring financial prosperity and ward off negative energy — making it an auspicious gift that recipients genuinely appreciate. Beyond symbolism, money plant is extremely low maintenance — it thrives in indirect light, tolerates irregular watering, and grows in soil or water equally well. It's the ideal plant for people who love greenery but don't have time for demanding plants.</p>
<h2>When to Gift a Money Plant</h2>
<p>Housewarming is the most popular occasion for gifting a money plant. Diwali money plant gifting is a growing tradition — a living, auspicious alternative to sweets and dry fruits. New Year, new office, and new beginnings of any kind are natural money plant moments. It's also a thoughtful birthday or graduation gift for someone starting a new chapter.</p>`,
  faqs: [
    { question: "Is money plant a good gift in India?", answer: "Yes. Money plant is one of the most popular gift plants in India — associated with prosperity and positive energy, it's widely gifted for housewarmings, Diwali, and new beginnings." },
    { question: "Is money plant easy to maintain?", answer: "Yes. Money plant is one of the most low-maintenance indoor plants — it grows in both soil and water, tolerates indirect light, and requires infrequent watering." },
    { question: "Can I get a money plant delivered the same day?", answer: "Yes. RedHeart delivers potted money plants the same day across 830+ cities in India. Plants are packaged carefully to arrive in perfect condition." },
  ],
},

{
  pageKey: "plants/snake",
  categorySlug: "plants",
  subcategorySlug: "snake",
  url: "/plants/snake",
  defaultH1: "Snake Plant Online",
  h1: "Snake Plant Online",
  metaTitle: "Buy Snake Plant Online – Same-Day Delivery | RedHeart",
  metaDescription: "Buy snake plant online with same-day delivery across 830+ cities in India. Air-purifying, low-maintenance snake plants from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/plants/snake",
  metaKeyword: "snake plant online India, buy snake plant, sansevieria online India, snake plant delivery, same day snake plant, air purifying plant gift India",
  footerContent: `<h2>Snake Plant — Delivered the Same Day Across India</h2>
<p>The snake plant (Sansevieria) is the modern gifting plant of choice — striking, air-purifying, and virtually indestructible. Its tall, architectural leaves make it a statement piece in any room, while its low-maintenance nature makes it perfect for busy people. RedHeart delivers healthy snake plants starting at ₹399 with same-day delivery across 830+ cities in India.</p>
<h2>Why Snake Plant Makes a Great Gift</h2>
<p>Snake plant is one of NASA's top air-purifying plants — it filters toxins and releases oxygen even at night, making it uniquely beneficial for bedrooms and offices. It thrives on neglect — low light, infrequent watering, and almost any indoor condition. This makes it the ideal gift for someone who loves plants but may not have a green thumb. It's a popular birthday gift, corporate gift, and desk plant across India.</p>
<h2>Best Occasions to Gift a Snake Plant</h2>
<p>Birthdays, office openings, housewarmings, and congratulations are the most common occasions for gifting a snake plant. Its contemporary appearance makes it suitable for modern homes and minimalist office spaces alike.</p>`,
  faqs: [
    { question: "Is snake plant good for indoors?", answer: "Yes. Snake plant is one of the best indoor plants — it tolerates low light, requires minimal watering, and actively purifies indoor air by filtering common toxins." },
    { question: "Why is snake plant a popular gift in India?", answer: "Snake plant is popular as a gift because it's low-maintenance, air-purifying, and visually impressive. It suits both home and office environments, making it a universally appreciated gift." },
    { question: "Can I get a snake plant delivered the same day?", answer: "Yes. RedHeart delivers snake plants the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "plants/jade",
  categorySlug: "plants",
  subcategorySlug: "jade",
  url: "/plants/jade",
  defaultH1: "Jade Plant Online",
  h1: "Jade Plant Online",
  metaTitle: "Buy Jade Plant Online – Same-Day Delivery | RedHeart",
  metaDescription: "Buy jade plant online with same-day delivery across 830+ cities in India. Lucky, low-maintenance jade plants from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/plants/jade",
  metaKeyword: "jade plant online India, buy jade plant, jade plant gift India, same day jade plant delivery, crassula ovata online, good luck plant India",
  footerContent: `<h2>Jade Plant — Delivered the Same Day Across India</h2>
<p>The jade plant is associated with good luck, prosperity, and friendship — making it one of the most meaningful gifting plants in Indian culture. Its thick, glossy leaves and tree-like form give it a presence that stands out among indoor plants. RedHeart delivers healthy jade plants starting at ₹399 with same-day delivery across 830+ cities in India.</p>
<h2>Jade Plant as a Gift</h2>
<p>In many cultures, jade plant is given as a gift at business openings and housewarmings to invite financial prosperity and positive energy. In India, it's increasingly popular as a Diwali gift, anniversary gift, and housewarming gift. A well-grown jade plant placed near the entrance of a home is considered auspicious. Its longevity — jade plants can live for decades with minimal care — makes it a gift that truly lasts.</p>
<h2>Caring for a Jade Plant</h2>
<p>Jade plants thrive in indirect sunlight and need watering only when the soil is dry — usually every 2–3 weeks. They're forgiving of neglect, making them ideal for beginners and busy plant owners alike.</p>`,
  faqs: [
    { question: "Is jade plant a lucky plant for home?", answer: "Yes. Jade plant is associated with good luck, prosperity, and positive energy in several cultures including Chinese feng shui. It's widely gifted at housewarmings and business openings." },
    { question: "Is jade plant low maintenance?", answer: "Yes. Jade plants need watering only every 2–3 weeks and thrive in indirect sunlight. They are among the most low-maintenance succulents available." },
    { question: "Can I get a jade plant delivered the same day?", answer: "Yes. RedHeart delivers jade plants the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "plants/peace-lily",
  categorySlug: "plants",
  subcategorySlug: "peace-lily",
  url: "/plants/peace-lily",
  defaultH1: "Peace Lily Plant Online",
  h1: "Peace Lily Plant Online",
  metaTitle: "Buy Peace Lily Plant Online – Same-Day Delivery | RedHeart",
  metaDescription: "Buy peace lily plant online with same-day delivery across 830+ cities in India. Elegant, air-purifying peace lily from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/plants/peace-lily",
  metaKeyword: "peace lily plant online India, buy peace lily, peace lily delivery India, same day peace lily delivery, peace lily gift, flowering indoor plant India",
  footerContent: `<h2>Peace Lily Plant — Delivered the Same Day Across India</h2>
<p>The peace lily is one of the most beautiful gifting plants — white blooms, rich green leaves, and a graceful form that brings calm and elegance to any space. It's also one of the most effective air-purifying plants, making it both visually beautiful and functionally meaningful. RedHeart delivers peace lily plants starting at ₹399 with same-day delivery across 830+ cities in India.</p>
<h2>When to Gift a Peace Lily</h2>
<p>Peace lily is a thoughtful get well soon gift — its white blooms convey care and calm, and its air-purifying qualities are genuinely beneficial for recovery. It's also a popular sympathy plant. For Mother's Day, Women's Day, and housewarmings, peace lily is a gift that combines beauty with purpose. Wedding gift peace lilies symbolise harmony and new beginnings.</p>
<h2>Caring for a Peace Lily</h2>
<p>Peace lily thrives in low to medium indirect light and needs watering once a week. It visibly droops when thirsty — a convenient indicator — and recovers quickly after watering. One of the easiest flowering indoor plants to maintain.</p>`,
  faqs: [
    { question: "What occasions is peace lily suitable for?", answer: "Peace lily is ideal for get well soon, sympathy, housewarmings, Mother's Day, Women's Day, and weddings. Its white blooms convey purity, care, and calm." },
    { question: "Is peace lily good for indoors?", answer: "Yes. Peace lily is one of the best indoor plants — it tolerates low light, purifies air, and produces beautiful white blooms even indoors." },
    { question: "Can I get a peace lily plant delivered the same day?", answer: "Yes. RedHeart delivers peace lily plants the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "plants/bonsai",
  categorySlug: "plants",
  subcategorySlug: "bonsai",
  url: "/plants/bonsai",
  defaultH1: "Bonsai Plant Online",
  h1: "Bonsai Plant Online",
  metaTitle: "Buy Bonsai Plant Online – Same-Day Delivery | RedHeart",
  metaDescription: "Buy bonsai plant online with same-day delivery across 830+ cities in India. Premium gifting bonsai trees from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/plants/bonsai",
  metaKeyword: "bonsai plant online India, buy bonsai online, bonsai tree delivery India, same day bonsai delivery, bonsai gift India, premium plant gift India",
  footerContent: `<h2>Bonsai Plant — Delivered the Same Day Across India</h2>
<p>A bonsai is not just a plant — it's a living work of art. The patience, craft, and care that goes into shaping a bonsai make it one of the most extraordinary gifts you can give. For someone who appreciates the beautiful and the extraordinary, a bonsai is a premium gift that cannot be matched. RedHeart delivers bonsai plants starting at ₹399 with same-day delivery across 830+ cities in India.</p>
<h2>Bonsai as a Gift</h2>
<p>Bonsai plants symbolise harmony, balance, and patience — making them deeply meaningful gifts for anniversaries, milestone birthdays, retirements, and housewarmings. They're among the most premium gifting plants available, occupying a space between art and nature. For someone setting up a home office or a new home, a bonsai is a statement piece that says you gave this thought.</p>
<h2>Caring for a Bonsai</h2>
<p>Bonsai plants need bright indirect light, regular watering (keeping the soil moist but not waterlogged), and occasional misting. They reward attention and care with beauty that grows over years.</p>`,
  faqs: [
    { question: "What makes bonsai a good gift?", answer: "Bonsai plants are premium, long-lasting gifts that symbolise harmony, patience, and balance. They are ideal for milestone occasions — anniversaries, retirements, and housewarmings — for someone who appreciates the extraordinary." },
    { question: "Is bonsai difficult to maintain?", answer: "Bonsai requires moderate care — bright indirect light, regular watering, and occasional misting. With basic attention, bonsai plants thrive and grow more beautiful over years." },
    { question: "Can I get a bonsai plant delivered the same day?", answer: "Yes. RedHeart delivers bonsai plants the same day across 830+ cities in India, packaged carefully to ensure safe arrival." },
  ],
},

// ─────────────────────────────────────────────────────────────────────────────
// BIRTHDAY SUBCATEGORIES
// ─────────────────────────────────────────────────────────────────────────────

{
  pageKey: "birthday/gifts-for-her",
  categorySlug: "birthday",
  subcategorySlug: "gifts-for-her",
  url: "/birthday/gifts-for-her",
  defaultH1: "Birthday Gifts for Her",
  h1: "Birthday Gifts for Her",
  metaTitle: "Birthday Gifts for Her – Same-Day Delivery | RedHeart",
  metaDescription: "Send birthday gifts for her online with same-day & midnight delivery across 830+ cities in India. Flowers, cakes & hampers from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/birthday/gifts-for-her",
  metaKeyword: "birthday gifts for her India, birthday gifts for girlfriend, birthday gifts for wife, birthday gifts for female friend, same day birthday gifts for her",
  footerContent: `<h2>Birthday Gifts for Her — Delivered the Same Day</h2>
<p>Her birthday deserves more than a generic gift. RedHeart brings you a curated selection of birthday gifts for her — fresh flowers, personalised cakes, living plants, and beautiful hampers — all available with same-day and midnight delivery across 830+ cities in India, starting at ₹399.</p>
<h2>Best Birthday Gifts for Her</h2>
<p>Pink roses and mixed flower bouquets are consistently the most loved birthday flowers for women. A red velvet or chocolate truffle cake paired with flowers is the most popular birthday gift combination. For something longer-lasting, a peace lily or money plant is a gift she'll enjoy for years. A curated hamper with flowers, chocolates, and a cake is the ultimate birthday experience — beautiful, delicious, and personal.</p>
<h2>Midnight Birthday Surprise for Her</h2>
<p>A midnight flower delivery or birthday cake arrival at 12 AM is one of the most romantic and memorable birthday gestures. Available across hundreds of cities through RedHeart.</p>`,
  faqs: [
    { question: "What are the best birthday gifts for a girlfriend in India?", answer: "Pink roses, red velvet cake, flower-cake combos, and gift hampers are the most popular birthday gifts for girlfriends. A midnight delivery adds a romantic element." },
    { question: "What birthday gifts work for a female colleague?", answer: "A tasteful mixed flower bouquet, a box of chocolates, or a desk plant like a money plant or snake plant are appropriate birthday gifts for female colleagues." },
    { question: "Can I send birthday gifts for her with same-day delivery?", answer: "Yes. RedHeart delivers birthday gifts for her the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "birthday/gifts-for-him",
  categorySlug: "birthday",
  subcategorySlug: "gifts-for-him",
  url: "/birthday/gifts-for-him",
  defaultH1: "Birthday Gifts for Him",
  h1: "Birthday Gifts for Him",
  metaTitle: "Birthday Gifts for Him – Same-Day Delivery | RedHeart",
  metaDescription: "Send birthday gifts for him online with same-day delivery across 830+ cities in India. Flowers, cakes, plants & hampers from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/birthday/gifts-for-him",
  metaKeyword: "birthday gifts for him India, birthday gifts for boyfriend, birthday gifts for husband, birthday gifts for male friend, same day birthday gifts for him",
  footerContent: `<h2>Birthday Gifts for Him — Delivered the Same Day</h2>
<p>Men deserve memorable birthday gifts too — and flowers, cakes, and plants are increasingly popular among men in India. RedHeart offers birthday gifts for him starting at ₹399 with same-day delivery across 830+ cities in India.</p>
<h2>Best Birthday Gifts for Him</h2>
<p>Bold mixed bouquets in deep reds, oranges, and purples make impressive birthday flower gifts for men. Chocolate truffle cake is the most popular birthday cake choice for men — rich, indulgent, and never wrong. Plants like snake plant and bonsai are popular gifts for men who appreciate a desk plant or a statement piece for their home. A gift hamper combining flowers, a cake, and chocolates is a comprehensive birthday gift that covers all bases.</p>`,
  faqs: [
    { question: "What are the best birthday gifts for a boyfriend?", answer: "Bold flower bouquets, chocolate truffle cake, snake plant, and gift hampers are popular birthday gifts for boyfriends. A flower-and-cake combo is the most ordered gift for him." },
    { question: "What plants are good birthday gifts for men?", answer: "Snake plant and bonsai are the most popular plant birthday gifts for men — both are visually striking, low-maintenance, and suitable for offices and modern homes." },
    { question: "Can I send birthday gifts for him with same-day delivery?", answer: "Yes. RedHeart delivers birthday gifts for him the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "birthday/gifts-for-mother",
  categorySlug: "birthday",
  subcategorySlug: "gifts-for-mother",
  url: "/birthday/gifts-for-mother",
  defaultH1: "Birthday Gifts for Mother",
  h1: "Birthday Gifts for Mother",
  metaTitle: "Birthday Gifts for Mother – Same-Day Delivery | RedHeart",
  metaDescription: "Send birthday gifts for mother online with same-day delivery across 830+ cities in India. Flowers, cakes & plants from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/birthday/gifts-for-mother",
  metaKeyword: "birthday gifts for mother India, birthday gift for mom online, flowers for mom birthday, birthday cake for mother, same day birthday gifts for mom",
  footerContent: `<h2>Birthday Gifts for Mother — Delivered the Same Day</h2>
<p>Her birthday is the one day to make sure she feels as valued as she makes everyone else feel every day. RedHeart brings you birthday gifts for mothers — warm flower bouquets, beautiful cakes, and plants she'll love — starting at ₹399 with same-day delivery across 830+ cities in India.</p>
<h2>Best Birthday Gifts for Mom</h2>
<p>Pink carnations and roses are the most traditional and loved birthday flowers for mothers. A peace lily plant is a deeply meaningful gift — beautiful, low-maintenance, and a daily reminder of care. A flower-and-cake combo — perhaps a mixed bouquet with a vanilla or butterscotch cake — creates a warm, complete birthday experience. For a more elaborate gift, a hamper with flowers, a cake, and her favourite chocolates makes the birthday feel truly celebrated.</p>`,
  faqs: [
    { question: "What are the best birthday gifts for a mother?", answer: "Pink carnations, roses, peace lily plants, and flower-cake combos are the most popular birthday gifts for mothers. A hamper with flowers, cake, and chocolates is also a warm, complete gift." },
    { question: "What plant is a good birthday gift for mom?", answer: "Peace lily and money plant are the most loved plant birthday gifts for mothers — both are beautiful, easy to care for, and carry meaningful symbolism." },
    { question: "Can I send birthday gifts for mother with same-day delivery?", answer: "Yes. RedHeart delivers birthday gifts for mothers the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "birthday/gifts-for-father",
  categorySlug: "birthday",
  subcategorySlug: "gifts-for-father",
  url: "/birthday/gifts-for-father",
  defaultH1: "Birthday Gifts for Father",
  h1: "Birthday Gifts for Father",
  metaTitle: "Birthday Gifts for Father – Same-Day Delivery | RedHeart",
  metaDescription: "Send birthday gifts for father online with same-day delivery across 830+ cities in India. Flowers, cakes & plants from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/birthday/gifts-for-father",
  metaKeyword: "birthday gifts for father India, birthday gift for dad online, flowers for dad birthday, birthday cake for father, same day birthday gifts for dad",
  footerContent: `<h2>Birthday Gifts for Father — Delivered the Same Day</h2>
<p>Dads often say they don't need anything — but a thoughtful birthday gift tells him exactly how much he means. RedHeart brings you birthday gifts for fathers starting at ₹399 with same-day delivery across 830+ cities in India.</p>
<h2>Best Birthday Gifts for Dad</h2>
<p>Classic flower arrangements in warm tones — reds, oranges, and yellows — make dignified birthday gifts for fathers. A bonsai or snake plant is an excellent birthday plant gift for a father with a home office or garden. Chocolate truffle cake or black forest cake are the most popular birthday cake choices for fathers. A gift hamper combining flowers, a cake, and premium chocolates creates a complete, celebratory birthday package.</p>`,
  faqs: [
    { question: "What are the best birthday gifts for a father?", answer: "Classic flower bouquets, chocolate cake, bonsai or snake plant, and gift hampers are popular birthday gifts for fathers. A flowers-and-cake combination is the most commonly ordered." },
    { question: "What plant makes a good birthday gift for dad?", answer: "Bonsai and snake plant are popular plant gifts for fathers — both are sophisticated, long-lasting, and suitable for home or office." },
    { question: "Can I send birthday gifts for father with same-day delivery?", answer: "Yes. RedHeart delivers birthday gifts for fathers the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "birthday/gifts-for-friends",
  categorySlug: "birthday",
  subcategorySlug: "gifts-for-friends",
  url: "/birthday/gifts-for-friends",
  defaultH1: "Birthday Gifts for Friends",
  h1: "Birthday Gifts for Friends",
  metaTitle: "Birthday Gifts for Friends – Same-Day Delivery | RedHeart",
  metaDescription: "Send birthday gifts for friends online with same-day delivery across 830+ cities in India. Flowers, cakes & hampers from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/birthday/gifts-for-friends",
  metaKeyword: "birthday gifts for friends India, send birthday gifts to friends, friend birthday flowers online, birthday gift for best friend, same day birthday gift for friend",
  footerContent: `<h2>Birthday Gifts for Friends — Delivered the Same Day</h2>
<p>Your best friend's birthday deserves something that matches the friendship — fun, thoughtful, and a little extra. RedHeart has birthday gifts for friends starting at ₹399 with same-day delivery across 830+ cities in India.</p>
<h2>Best Birthday Gifts for a Best Friend</h2>
<p>Colourful mixed bouquets are the most popular birthday flower gift for friends — vibrant, fun, and instantly celebratory. Pinata cakes are the most exciting birthday cake choice for friends — the surprise element when the cake is cut makes for great photos and memories. A gift hamper with flowers, chocolates, and a cake covers all the birthday essentials in one delivery. For a lasting gift, a money plant or snake plant is a fun, low-key plant gift that grows as long as the friendship.</p>`,
  faqs: [
    { question: "What is the best birthday gift for a best friend?", answer: "A mixed bouquet with a pinata or chocolate cake is the most popular friend birthday gift combination. A curated gift hamper with flowers, chocolates, and a cake is also a great choice." },
    { question: "What flowers are best for a friend's birthday?", answer: "Colourful mixed bouquets, sunflowers, and bright gerbera arrangements are the most popular birthday flowers for friends — cheerful, energetic, and fun." },
    { question: "Can I send birthday gifts to a friend in another city?", answer: "Yes. RedHeart delivers birthday gifts to friends across 830+ cities in India with same-day delivery." },
  ],
},

{
  pageKey: "birthday/gifts-for-wife",
  categorySlug: "birthday",
  subcategorySlug: "gifts-for-wife",
  url: "/birthday/gifts-for-wife",
  defaultH1: "Birthday Gifts for Wife",
  h1: "Birthday Gifts for Wife",
  metaTitle: "Birthday Gifts for Wife – Same-Day Delivery | RedHeart",
  metaDescription: "Send birthday gifts for wife online with same-day & midnight delivery across 830+ cities in India. Roses, cakes & hampers from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/birthday/gifts-for-wife",
  metaKeyword: "birthday gifts for wife India, birthday flowers for wife, birthday cake for wife online, midnight birthday gift for wife, same day birthday gift for wife",
  footerContent: `<h2>Birthday Gifts for Wife — Delivered the Same Day</h2>
<p>Her birthday is a chance to show her you didn't just remember — you planned something beautiful. RedHeart brings you birthday gifts for wives starting at ₹399 with same-day and midnight delivery across 830+ cities in India.</p>
<h2>Most Loved Birthday Gifts for Wife</h2>
<p>Red roses and pink roses are the most romantic birthday flower choices for a wife. A red velvet or chocolate truffle cake paired with roses is the most popular gift combination. A midnight delivery — flowers and cake arriving at exactly 12 AM — is the most memorable birthday gesture you can arrange. A premium gift hamper with roses, a cake, and fine chocolates makes the birthday feel truly special.</p>`,
  faqs: [
    { question: "What is the most romantic birthday gift for a wife?", answer: "A midnight delivery of red roses and red velvet cake is the most romantic birthday gift option. It combines beautiful flowers, a premium cake, and the surprise of an exact 12 AM delivery." },
    { question: "Can I arrange a midnight birthday surprise for my wife?", answer: "Yes. RedHeart offers midnight delivery for flowers, cakes, and hampers — your gift arrives exactly at 12 AM on her birthday." },
    { question: "What flowers are best for a wife's birthday?", answer: "Red roses and pink roses are the most popular birthday flowers for a wife. A roses-and-lily combination is an elegant, premium option." },
  ],
},

{
  pageKey: "birthday/gifts-for-husband",
  categorySlug: "birthday",
  subcategorySlug: "gifts-for-husband",
  url: "/birthday/gifts-for-husband",
  defaultH1: "Birthday Gifts for Husband",
  h1: "Birthday Gifts for Husband",
  metaTitle: "Birthday Gifts for Husband – Same-Day Delivery | RedHeart",
  metaDescription: "Send birthday gifts for husband online with same-day delivery across 830+ cities in India. Flowers, cakes & plants from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/birthday/gifts-for-husband",
  metaKeyword: "birthday gifts for husband India, birthday flowers for husband, birthday cake for husband online, same day birthday gift for husband",
  footerContent: `<h2>Birthday Gifts for Husband — Delivered the Same Day</h2>
<p>His birthday is the day to make him feel celebrated — with a gift that's as thoughtful as he is important. RedHeart delivers birthday gifts for husbands starting at ₹399 with same-day delivery across 830+ cities in India.</p>
<h2>Best Birthday Gifts for Husband</h2>
<p>Bold mixed flower bouquets in deep reds and purples make striking birthday gifts for husbands. Chocolate truffle cake is the most popular birthday cake choice for men — rich, generous, and always appreciated. A bonsai or snake plant is a sophisticated birthday plant gift for a husband with a home office. A complete gift hamper — bold flowers, chocolate cake, and fine chocolates — is the most comprehensive birthday package.</p>`,
  faqs: [
    { question: "What flowers are good for a husband's birthday?", answer: "Bold mixed bouquets in deep reds, oranges, and purples are the most popular birthday flower choices for husbands. Red roses are also a classic romantic birthday gesture." },
    { question: "What plant makes a good birthday gift for a husband?", answer: "Bonsai and snake plant are the most popular plant gifts for husbands — visually impressive, long-lasting, and suitable for home or office." },
    { question: "Can I get birthday gifts for husband delivered same day?", answer: "Yes. RedHeart delivers birthday gifts for husbands the same day across 830+ cities in India." },
  ],
},

// ─────────────────────────────────────────────────────────────────────────────
// ANNIVERSARY SUBCATEGORIES
// ─────────────────────────────────────────────────────────────────────────────

{
  pageKey: "anniversary/flowers",
  categorySlug: "anniversary",
  subcategorySlug: "flowers",
  url: "/anniversary/flowers",
  defaultH1: "Anniversary Flowers Delivery",
  h1: "Anniversary Flowers Delivery",
  metaTitle: "Anniversary Flowers Online – Same-Day Delivery | RedHeart",
  metaDescription: "Order anniversary flowers online with same-day & midnight delivery across 830+ cities in India. Red roses, lilies & bouquets from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/anniversary/flowers",
  metaKeyword: "anniversary flowers online, send anniversary flowers India, red roses for anniversary, anniversary bouquet delivery, same day anniversary flowers",
  footerContent: `<h2>Anniversary Flowers — Delivered the Same Day</h2>
<p>The right anniversary flowers say what no card can. RedHeart delivers fresh anniversary flower arrangements starting at ₹399 with same-day and midnight delivery across 830+ cities in India.</p>
<h2>Best Flowers for an Anniversary</h2>
<p>Red roses are the defining anniversary flower — romantic, bold, and timeless. A dozen or two dozen long-stem red roses is the most gifted anniversary bouquet. Roses paired with lilies create a more elaborate, premium arrangement. Pink roses add softness and warmth for couples who prefer a gentler romantic statement. Mixed bouquets in deep reds and purples make dramatic anniversary arrangements.</p>`,
  faqs: [
    { question: "Which flowers are most popular for anniversaries?", answer: "Red roses are the most popular anniversary flowers. Roses-and-lily combinations and pink roses are also common choices. The number of roses often mirrors the number of years — 12 for a general gift, matching years for milestone anniversaries." },
    { question: "Can I get anniversary flowers delivered at midnight?", answer: "Yes. RedHeart offers midnight anniversary flower delivery — flowers arrive at 12 AM when the anniversary begins." },
    { question: "Should anniversary flowers be paired with a gift?", answer: "Pairing flowers with a red velvet cake or gift hamper creates a more complete anniversary celebration. You can combine these at checkout on RedHeart." },
  ],
},

{
  pageKey: "anniversary/gifts-for-wife",
  categorySlug: "anniversary",
  subcategorySlug: "gifts-for-wife",
  url: "/anniversary/gifts-for-wife",
  defaultH1: "Anniversary Gifts for Wife",
  h1: "Anniversary Gifts for Wife",
  metaTitle: "Anniversary Gifts for Wife – Same-Day Delivery | RedHeart",
  metaDescription: "Send anniversary gifts for wife online with same-day & midnight delivery across 830+ cities in India. Roses, cakes & hampers from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/anniversary/gifts-for-wife",
  metaKeyword: "anniversary gifts for wife India, anniversary flowers for wife, anniversary cake for wife, same day anniversary gift for wife, romantic anniversary gift India",
  footerContent: `<h2>Anniversary Gifts for Wife — Delivered the Same Day</h2>
<p>The anniversary gift for your wife should feel as intentional as the marriage itself. RedHeart delivers anniversary gifts for wives starting at ₹399 with same-day and midnight delivery across 830+ cities in India.</p>
<h2>Most Romantic Anniversary Gifts for Wife</h2>
<p>Red roses are always the right choice for a wife's anniversary — 12, 24, or an elaborate arrangement with lilies for a grander gesture. A midnight flower delivery at the start of the anniversary day creates a lasting memory. Red velvet cake paired with roses is the most romantic anniversary gift combination. For something that lasts beyond the day, a peace lily or jade plant is a beautiful, meaningful anniversary gift.</p>`,
  faqs: [
    { question: "What is the most romantic anniversary gift for a wife?", answer: "A midnight delivery of 24 red roses with a red velvet cake is the most romantic anniversary gift combination. It marks the anniversary at its very first moment." },
    { question: "What plant is a good anniversary gift for a wife?", answer: "Peace lily and jade plant are popular anniversary plant gifts for a wife — both are beautiful, low-maintenance, and symbolise harmony and lasting growth." },
    { question: "Can I get anniversary gifts for wife delivered the same day?", answer: "Yes. RedHeart delivers anniversary gifts for wives — flowers, cakes, plants, and hampers — the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "anniversary/gifts-for-husband",
  categorySlug: "anniversary",
  subcategorySlug: "gifts-for-husband",
  url: "/anniversary/gifts-for-husband",
  defaultH1: "Anniversary Gifts for Husband",
  h1: "Anniversary Gifts for Husband",
  metaTitle: "Anniversary Gifts for Husband – Same-Day Delivery | RedHeart",
  metaDescription: "Send anniversary gifts for husband online with same-day delivery across 830+ cities in India. Flowers, cakes & plants from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/anniversary/gifts-for-husband",
  metaKeyword: "anniversary gifts for husband India, anniversary flowers for husband, anniversary cake for husband, same day anniversary gift for husband",
  footerContent: `<h2>Anniversary Gifts for Husband — Delivered the Same Day</h2>
<p>His anniversary deserves a gift that matches what the relationship means. RedHeart delivers anniversary gifts for husbands starting at ₹399 with same-day delivery across 830+ cities in India.</p>
<h2>Best Anniversary Gifts for Husband</h2>
<p>Bold mixed bouquets or red roses make striking anniversary flower gifts for a husband. Ferrero Rocher cake or chocolate truffle cake are the most popular anniversary cake choices for men — premium, indulgent, and celebratory. A bonsai plant is a sophisticated, lasting anniversary gift for a husband — a gift that grows alongside the marriage. A gift hamper with bold flowers, a premium cake, and fine chocolates creates a complete anniversary experience.</p>`,
  faqs: [
    { question: "What is a good anniversary gift for a husband?", answer: "Bold mixed flowers, Ferrero Rocher or chocolate truffle cake, bonsai plant, and gift hampers are popular anniversary gifts for husbands." },
    { question: "What plant makes a good anniversary gift for a husband?", answer: "Bonsai is the most meaningful anniversary plant for a husband — it symbolises patience, growth, and long-term care, which mirrors a lasting marriage." },
    { question: "Can I get anniversary gifts for husband delivered same day?", answer: "Yes. RedHeart delivers anniversary gifts for husbands the same day across 830+ cities in India." },
  ],
},

// ─────────────────────────────────────────────────────────────────────────────
// GIFT HAMPERS SUBCATEGORIES
// ─────────────────────────────────────────────────────────────────────────────

{
  pageKey: "gift-hampers/birthday",
  categorySlug: "gift-hampers",
  subcategorySlug: "birthday",
  url: "/gift-hampers/birthday",
  defaultH1: "Birthday Gift Hampers Online",
  h1: "Birthday Gift Hampers Online",
  metaTitle: "Birthday Gift Hampers Online – Same-Day Delivery | RedHeart",
  metaDescription: "Send birthday gift hampers online with same-day & midnight delivery across 830+ cities in India. Flowers, cakes & chocolates combined from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/gift-hampers/birthday",
  metaKeyword: "birthday gift hamper India, send birthday hamper online, birthday gift basket India, same day birthday hamper delivery, birthday hamper with flowers and cake",
  footerContent: `<h2>Birthday Gift Hampers — Delivered the Same Day</h2>
<p>A birthday gift hamper is the most complete gift you can send — flowers, cake, chocolates, and more, all in one thoughtful delivery. RedHeart birthday hampers start at ₹399 with same-day and midnight delivery across 830+ cities in India.</p>
<h2>What's in a Birthday Hamper</h2>
<p>Birthday hampers on RedHeart typically combine a fresh flower bouquet, a cake in the recipient's preferred flavour, and a selection of chocolates. You can also add a plant or a personalised note at checkout. The combination creates a birthday experience rather than just a gift — something that delights on multiple levels at once.</p>
<h2>Midnight Birthday Hamper Delivery</h2>
<p>A birthday hamper delivered at exactly 12 AM — flowers, cake, and chocolates arriving all at once — is the most elaborate and memorable birthday surprise you can arrange. Available through RedHeart across hundreds of Indian cities.</p>`,
  faqs: [
    { question: "What does a birthday gift hamper include?", answer: "Birthday gift hampers on RedHeart typically include a flower bouquet, a cake, and chocolates. You can customise the combination at checkout." },
    { question: "Can I get a birthday hamper delivered at midnight?", answer: "Yes. RedHeart offers midnight birthday hamper delivery across hundreds of Indian cities." },
    { question: "What is the starting price for a birthday gift hamper?", answer: "Birthday gift hampers on RedHeart start at ₹399. Premium hampers with flowers, cake, and chocolates are available for larger budgets." },
  ],
},

{
  pageKey: "gift-hampers/anniversary",
  categorySlug: "gift-hampers",
  subcategorySlug: "anniversary",
  url: "/gift-hampers/anniversary",
  defaultH1: "Anniversary Gift Hampers Online",
  h1: "Anniversary Gift Hampers Online",
  metaTitle: "Anniversary Gift Hampers Online – Same-Day Delivery | RedHeart",
  metaDescription: "Send anniversary gift hampers online with same-day delivery across 830+ cities in India. Roses, red velvet cake & chocolates combined from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/gift-hampers/anniversary",
  metaKeyword: "anniversary gift hamper India, send anniversary hamper online, anniversary gift basket India, same day anniversary hamper, romantic gift hamper India",
  footerContent: `<h2>Anniversary Gift Hampers — Delivered the Same Day</h2>
<p>An anniversary hamper combines everything romantic into one delivery — red roses, a premium cake, and fine chocolates. RedHeart anniversary hampers start at ₹399 with same-day and midnight delivery across 830+ cities in India.</p>
<h2>What Makes the Perfect Anniversary Hamper</h2>
<p>The most popular anniversary hamper combines 12 or 24 red roses with a red velvet cake and a box of premium chocolates. Together, they create a complete anniversary experience — romantic flowers, a celebratory cake, and sweet indulgence. For milestone anniversaries, a premium hamper with a peace lily plant, roses, and a Ferrero Rocher cake makes an elevated gift that reflects the significance of the occasion.</p>`,
  faqs: [
    { question: "What is the best anniversary gift hamper to send?", answer: "A hamper combining red roses, red velvet cake, and premium chocolates is the most romantic and popular anniversary hamper on RedHeart." },
    { question: "Can I send an anniversary hamper with midnight delivery?", answer: "Yes. RedHeart delivers anniversary hampers at midnight across hundreds of Indian cities." },
    { question: "Can I add a plant to an anniversary hamper?", answer: "Yes. You can add a peace lily, jade plant, or other plant to your anniversary hamper at checkout." },
  ],
},

{
  pageKey: "gift-hampers/for-her",
  categorySlug: "gift-hampers",
  subcategorySlug: "for-her",
  url: "/gift-hampers/for-her",
  defaultH1: "Gift Hampers for Her",
  h1: "Gift Hampers for Her",
  metaTitle: "Gift Hampers for Her – Same-Day Delivery | RedHeart",
  metaDescription: "Send gift hampers for her online with same-day delivery across 830+ cities in India. Flowers, cakes & chocolates from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/gift-hampers/for-her",
  metaKeyword: "gift hampers for her India, gift basket for women online, send hamper to girlfriend, hamper for wife India, same day gift hamper for her",
  footerContent: `<h2>Gift Hampers for Her — Delivered the Same Day</h2>
<p>A gift hamper for her says you thought of everything — flowers she loves, a cake she'll enjoy, and chocolates to savour. RedHeart gift hampers for her start at ₹399 with same-day delivery across 830+ cities in India.</p>
<h2>What She'll Love in a Hamper</h2>
<p>Pink roses or a mixed flower bouquet, a red velvet or chocolate truffle cake, and a premium chocolate selection make the ideal hamper for her. Add a peace lily or money plant for a longer-lasting element. The combination creates a gift experience — layered, thoughtful, and personal — that a single item can never match.</p>`,
  faqs: [
    { question: "What should a gift hamper for her include?", answer: "A hamper for her ideally includes pink roses or a mixed flower bouquet, a cake in her preferred flavour, and premium chocolates. A plant like a peace lily adds a lasting element." },
    { question: "What occasion are gift hampers for her best for?", answer: "Gift hampers for her work for birthdays, anniversaries, Valentine's Day, Mother's Day, Women's Day, and as thoughtful gestures for any occasion." },
    { question: "Can I get a gift hamper for her with same-day delivery?", answer: "Yes. RedHeart delivers gift hampers for her the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "gift-hampers/for-him",
  categorySlug: "gift-hampers",
  subcategorySlug: "for-him",
  url: "/gift-hampers/for-him",
  defaultH1: "Gift Hampers for Him",
  h1: "Gift Hampers for Him",
  metaTitle: "Gift Hampers for Him – Same-Day Delivery | RedHeart",
  metaDescription: "Send gift hampers for him online with same-day delivery across 830+ cities in India. Flowers, cakes & plants from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/gift-hampers/for-him",
  metaKeyword: "gift hampers for him India, gift basket for men online, send hamper to boyfriend, hamper for husband India, same day gift hamper for him",
  footerContent: `<h2>Gift Hampers for Him — Delivered the Same Day</h2>
<p>A gift hamper for him is bold, complete, and thoughtfully put together — flowers, a great cake, and something to savour. RedHeart gift hampers for him start at ₹399 with same-day delivery across 830+ cities in India.</p>
<h2>What He'll Love in a Hamper</h2>
<p>A bold mixed bouquet or red roses, a chocolate truffle or Ferrero Rocher cake, and premium dark chocolates make the ideal hamper for him. Add a snake plant or bonsai for a plant element that suits a man's aesthetic. This combination creates a comprehensive gift — visual impact, something to eat, and something that lasts.</p>`,
  faqs: [
    { question: "What should a gift hamper for him include?", answer: "A hamper for him works best with bold flowers, a rich chocolate cake, and premium dark chocolates. Adding a snake plant or bonsai creates a sophisticated, lasting element." },
    { question: "Can I send a gift hamper for him with same-day delivery?", answer: "Yes. RedHeart delivers gift hampers for him the same day across 830+ cities in India." },
    { question: "What occasions are gift hampers for him best for?", answer: "Birthday, anniversary, Father's Day, Valentine's Day, and congratulations are the most popular occasions for gifting hampers to men." },
  ],
},

];

// ─────────────────────────────────────────────────────────────────────────────
// Upload all pages
// ─────────────────────────────────────────────────────────────────────────────

async function upload() {
  console.log(`Uploading ${pages.length} pages...\n`);
  let success = 0, failed = 0;

  for (const page of pages) {
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(page),
      });
      const data = await res.json();
      if (data.success) {
        console.log(`✅ ${page.pageKey}`);
        success++;
      } else {
        console.log(`❌ ${page.pageKey} — ${JSON.stringify(data)}`);
        failed++;
      }
    } catch (err) {
      console.log(`❌ ${page.pageKey} — ${err.message}`);
      failed++;
    }
  }

  console.log(`\nDone. ✅ ${success} uploaded, ❌ ${failed} failed.`);
}

upload();
