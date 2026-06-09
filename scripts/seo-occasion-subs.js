const API = "https://backend.redheart.in/api/category-seo/upsert";

const pages = [

// ── BIRTHDAY SUBCATEGORIES ─────────────────────────────────────────────────

{
  pageKey: "birthday/gifts-for-her",
  categorySlug: "birthday", subcategorySlug: "gifts-for-her", url: "/birthday/gifts-for-her",
  h1: "Birthday Gifts for Her", defaultH1: "Birthday Gifts for Her",
  metaTitle: "Birthday Gifts for Her – Same-Day Delivery India | RedHeart",
  metaDescription: "Send birthday gifts for her online with same-day & midnight delivery across 830+ cities. Flowers, cakes & hampers from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/birthday/gifts-for-her",
  metaKeyword: "birthday gifts for her India, send birthday gifts to her, birthday flowers for her, birthday cake for her, same day birthday gifts women India",
  footerContent: `
<h2>Birthday Gifts for Her — Beautiful, Personal, and Exactly Right</h2>
<p>Every woman's birthday deserves a gift that feels specifically chosen — not generic, not obligatory, but genuinely considered. The best birthday gifts for her combine visual beauty (flowers), indulgence (cake), and lasting significance (plant or hamper) in a way that acknowledges both the occasion and the person. RedHeart delivers birthday gifts for her across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>Best Birthday Gifts for Her by Relationship</h2>
<table>
  <thead><tr><th>Relationship</th><th>Best Gift</th><th>Premium Option</th></tr></thead>
  <tbody>
    <tr><td>Girlfriend</td><td>Pink or red roses + red velvet cake</td><td>24 red roses + Ferrero Rocher cake + midnight delivery</td></tr>
    <tr><td>Wife</td><td>Roses and lily + red velvet</td><td>Premium hamper: roses, Ferrero Rocher cake, chocolates</td></tr>
    <tr><td>Mother</td><td>Pink carnations + butterscotch cake + peace lily</td><td>Flowers + cake + plant combo</td></tr>
    <tr><td>Sister</td><td>Pink roses + black forest cake</td><td>Flowers + cake + birthday chocolates</td></tr>
    <tr><td>Best friend</td><td>Vibrant mixed + pinata or strawberry cake</td><td>Flowers + cake + hamper</td></tr>
    <tr><td>Female colleague</td><td>Tasteful mixed + pineapple or butterscotch</td><td>Flowers + cake — professional and warm</td></tr>
    <tr><td>Grandmother</td><td>White lilies or soft mixed + vanilla cake</td><td>Classic and dignified</td></tr>
  </tbody>
</table>

<h2>The Midnight Birthday Surprise for Her</h2>
<p>The most impactful birthday gift for a girlfriend, wife, or close female friend is the midnight delivery. A red roses bouquet and a red velvet cake arriving at exactly 12 AM on her birthday — at the very first moment of the day — is the birthday gift she will remember for years. It is not the most expensive gift available. It is the most intentionally timed, which makes it the most romantic.</p>

<h2>What Makes a Birthday Gift for Her Feel Personal</h2>
<p>The most memorable birthday gifts for her share one quality: specificity. Not "I got you flowers" but "I got you your favourite kind of flowers." Not "I ordered a cake" but "I ordered the red velvet you mentioned last month." Knowing her preference — even approximately — elevates any gift. If you know her favourite flower, order that. If you know her preferred cake flavour, choose it. If you know she has been wanting a particular plant, get that one. The thought behind the choice is what she remembers.</p>`,
  faqs: [
    { question: "What birthday gifts are most popular for women in India?", answer: "Flowers and cake combinations are the most popular birthday gifts for women. Red velvet cake with roses is the most romantic combination. Flowers with a peace lily plant is the most complete Mother's Day-appropriate birthday gift." },
    { question: "Can I arrange a midnight birthday surprise for her?", answer: "Yes. RedHeart offers midnight delivery — your flowers and cake arrive at exactly 12 AM on her birthday morning." },
    { question: "What is a good birthday gift for a female colleague?", answer: "A tasteful mixed flower arrangement with a pineapple or butterscotch cake is professionally appropriate and warmly appreciated. Avoid overly romantic choices like red roses for professional relationships." },
    { question: "Can I get birthday gifts for her delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "birthday/gifts-for-him",
  categorySlug: "birthday", subcategorySlug: "gifts-for-him", url: "/birthday/gifts-for-him",
  h1: "Birthday Gifts for Him", defaultH1: "Birthday Gifts for Him",
  metaTitle: "Birthday Gifts for Him – Same-Day Delivery India | RedHeart",
  metaDescription: "Send birthday gifts for him online with same-day delivery across 830+ cities. Bold flowers, chocolate cake & plants from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/birthday/gifts-for-him",
  metaKeyword: "birthday gifts for him India, send birthday gifts to him, birthday flowers for men, birthday cake for him, same day birthday gifts men India",
  footerContent: `
<h2>Birthday Gifts for Him — Bold, Rich, and Genuinely Appreciated</h2>
<p>Birthday gifts for men are approached differently from gifts for women. Choose richness over delicacy, visual weight over prettiness, and quality over quantity. A dramatic flower bouquet at his office, a premium dark chocolate truffle cake, a snake plant that will outlast the birthday by years — these are gifts that land well for men because they are suited to how men experience and use gifts. RedHeart delivers birthday gifts for him across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Birthday Gifts for Him by Relationship</h2>
<table>
  <thead><tr><th>Relationship</th><th>Best Gift</th><th>Office Delivery?</th></tr></thead>
  <tbody>
    <tr><td>Boyfriend</td><td>Bold mixed bouquet + chocolate truffle cake</td><td>Yes — impactful</td></tr>
    <tr><td>Husband</td><td>Red roses (office) + chocolate truffle or Ferrero Rocher</td><td>Yes — very impactful</td></tr>
    <tr><td>Father</td><td>Classic mixed + black forest / chocolate truffle + bonsai</td><td>Optional</td></tr>
    <tr><td>Brother</td><td>Bold mixed + chocolate truffle or KitKat cake</td><td>Optional</td></tr>
    <tr><td>Best friend (male)</td><td>Sunflowers or bold mixed + truffle or pinata</td><td>Yes — fun and impactful</td></tr>
    <tr><td>Male colleague</td><td>Yellow roses or bold mixed + chocolate truffle</td><td>Yes — professional and warm</td></tr>
    <tr><td>Grandfather</td><td>Classic mixed arrangement + black forest</td><td>No — home delivery</td></tr>
  </tbody>
</table>

<h2>Why Office Delivery Works for Him</h2>
<p>For a boyfriend, husband, or close male friend, sending birthday gifts to his workplace is the most publicly impactful birthday gesture available. His colleagues notice. They congratulate him. He carries the birthday celebration with him through the workday in a visible, social way. The boldness of a flower delivery at a man's office communicates that someone in his life thought carefully about the timing and the setting — not just the gift.</p>`,
  faqs: [
    { question: "What birthday gifts are most popular for men in India?", answer: "Chocolate truffle cake, bold mixed flower bouquets, Ferrero Rocher cake, snake plant, and KitKat cake are the most popular birthday gifts for men. Workplace delivery amplifies the impact." },
    { question: "Should I send birthday gifts to his office or home?", answer: "Office delivery is usually more impactful for men — it creates a public birthday celebration. Home delivery is more intimate. For a boyfriend or husband, office delivery on the birthday morning is often the better choice." },
    { question: "What plant is best as a birthday gift for a man?", answer: "Snake plant is the most popular plant birthday gift for men — architectural, near-indestructible, and professional-looking. Bonsai is the premium option for milestone birthdays." },
    { question: "Can I get birthday gifts for him delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "birthday/gifts-for-wife",
  categorySlug: "birthday", subcategorySlug: "gifts-for-wife", url: "/birthday/gifts-for-wife",
  h1: "Birthday Gifts for Wife", defaultH1: "Birthday Gifts for Wife",
  metaTitle: "Birthday Gifts for Wife – Midnight Delivery India | RedHeart",
  metaDescription: "Send birthday gifts for wife with midnight & same-day delivery across 830+ cities. Red roses, red velvet cake & premium hampers from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/birthday/gifts-for-wife",
  metaKeyword: "birthday gifts for wife India, wife birthday flowers, birthday cake for wife, midnight birthday delivery wife, birthday surprise for wife India",
  footerContent: `
<h2>Your Wife's Birthday — Do It Right From the First Minute</h2>
<p>A wife's birthday deserves more than the standard gifting default. Not because the bar is low, but because the opportunity is high: you know her better than almost anyone, which means you can choose a gift that is specifically, personally right for her. RedHeart delivers birthday gifts for wives across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>Birthday Gifts for Wife — What Works</h2>
<table>
  <thead><tr><th>Gift</th><th>Impact</th><th>Best Timing</th></tr></thead>
  <tbody>
    <tr><td>24 red roses</td><td>Classic romantic — the number matters</td><td>Midnight for maximum impact</td></tr>
    <tr><td>Red velvet cake + red roses</td><td>The most romantic birthday combination</td><td>Midnight together</td></tr>
    <tr><td>Roses and lily arrangement</td><td>Premium — more elaborate than roses alone</td><td>Morning delivery</td></tr>
    <tr><td>Ferrero Rocher cake + red roses</td><td>Luxury — the premium birthday statement</td><td>Midnight or morning</td></tr>
    <tr><td>Premium hamper</td><td>Multiple gifts — layered, abundant</td><td>Morning delivery</td></tr>
    <tr><td>"Just because" bouquet (unexpected day)</td><td>The most remembered gesture of the relationship</td><td>Random weekday — not the birthday</td></tr>
  </tbody>
</table>

<h2>The Midnight Birthday Delivery for Your Wife</h2>
<p>The midnight birthday delivery for a wife is the gesture that couples talk about for years. Red roses and a red velvet cake arriving at exactly 12 AM — at the very first moment of her birthday — is the birthday gift that begins before the day does. It says: I was counting the minutes to her birthday. It tells her the day was in your thoughts from its first second. RedHeart's midnight delivery is available across hundreds of Indian cities — book at least a week ahead to guarantee the slot.</p>`,
  faqs: [
    { question: "What is the most romantic birthday gift for a wife?", answer: "24 red roses with a red velvet cake delivered at midnight is the most romantic birthday gift for a wife. The combination of colour, luxury, and the intimate midnight timing creates the most memorable birthday beginning possible." },
    { question: "Can I arrange midnight birthday delivery for my wife?", answer: "Yes. RedHeart offers midnight delivery across hundreds of Indian cities. Book at least a week ahead to guarantee the midnight slot on her birthday." },
    { question: "What flowers are best for a wife's birthday?", answer: "Red roses (for romance), pink roses (for warmth), or a roses-and-lily combination (for a premium arrangement) are the best birthday flowers for a wife." },
    { question: "Can I get wife's birthday gifts delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India. Midnight delivery is also available." },
  ],
},

{
  pageKey: "birthday/gifts-for-husband",
  categorySlug: "birthday", subcategorySlug: "gifts-for-husband", url: "/birthday/gifts-for-husband",
  h1: "Birthday Gifts for Husband", defaultH1: "Birthday Gifts for Husband",
  metaTitle: "Birthday Gifts for Husband – Same-Day Delivery India | RedHeart",
  metaDescription: "Send birthday gifts for husband with same-day delivery across 830+ cities. Bold flowers, chocolate cake & plants from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/birthday/gifts-for-husband",
  metaKeyword: "birthday gifts for husband India, husband birthday flowers, birthday cake for husband, birthday surprise for husband India, same day birthday delivery husband",
  footerContent: `
<h2>Your Husband's Birthday — A Public Gesture or an Intimate One</h2>
<p>The best birthday gifts for a husband depend on one key decision: are you making a private gesture or a public one? A midnight delivery at home is deeply intimate. A bold flower arrangement delivered to his office on the birthday morning is publicly romantic — his colleagues see it and the birthday becomes a workplace celebration. Both are powerful in different ways. RedHeart delivers birthday gifts for husbands across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Birthday Gifts for Husband — By Strategy</h2>
<table>
  <thead><tr><th>Strategy</th><th>Best Gift</th><th>Effect</th></tr></thead>
  <tbody>
    <tr><td>Public gesture (office)</td><td>Red roses or bold mixed + delivery to office</td><td>Colleagues notice, birthday becomes a public celebration</td></tr>
    <tr><td>Intimate surprise (home)</td><td>Favourite food + flowers + his preferred cake</td><td>Private, personal, about the two of you</td></tr>
    <tr><td>Midnight (for the romantic moment)</td><td>Bold flowers + chocolate truffle cake at 12 AM</td><td>The birthday begins with your gesture</td></tr>
    <tr><td>Premium/milestone</td><td>Ferrero Rocher + roses + bonsai (for desk/study)</td><td>Layered, luxurious, lasting</td></tr>
  </tbody>
</table>

<h2>What He Actually Wants</h2>
<p>Men are often more moved by birthday gestures than they express. A wife who sends flowers to her husband's office, who arranges a midnight cake delivery, who takes the birthday seriously enough to plan something specific — that is noticed, appreciated, and remembered. The key is not the size of the gift but the evidence that the birthday was taken seriously and that some thought went into marking it specifically.</p>`,
  faqs: [
    { question: "What birthday gift works best for a husband?", answer: "Bold mixed bouquet or red roses delivered to his office, paired with a chocolate truffle or Ferrero Rocher cake, is the most impactful birthday gift for a husband. The office delivery creates a public birthday celebration." },
    { question: "Should I send my husband's birthday flowers to his office?", answer: "Yes — office delivery for a husband's birthday is a romantically public gesture that his colleagues will notice and that he will carry with him all day. It communicates that you put thought into both the gift and the timing." },
    { question: "Can I get husband's birthday gifts delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "birthday/gifts-for-mother",
  categorySlug: "birthday", subcategorySlug: "gifts-for-mother", url: "/birthday/gifts-for-mother",
  h1: "Birthday Gifts for Mother", defaultH1: "Birthday Gifts for Mother",
  metaTitle: "Birthday Gifts for Mother – Same-Day Delivery India | RedHeart",
  metaDescription: "Send birthday gifts for mother with same-day delivery across 830+ cities. Pink carnations, butterscotch cake & peace lily from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/birthday/gifts-for-mother",
  metaKeyword: "birthday gifts for mother India, birthday flowers for mom, birthday cake for mom, same day birthday delivery for mother, birthday plants for mom",
  footerContent: `
<h2>Your Mother's Birthday — Making Her Feel Seen</h2>
<p>A mother's birthday is the occasion where the most common gifting failure happens: people who love her deeply give her something generic. The remedy is not expense — it is attention. A flower she actually loves. Her preferred cake flavour remembered from a conversation months ago. A plant for her space. Something that says: I was thinking about who you specifically are, not just what to get. RedHeart delivers birthday gifts for mothers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Birthday Gifts for Mother</h2>
<table>
  <thead><tr><th>Gift</th><th>Why It Works</th></tr></thead>
  <tbody>
    <tr><td>Pink carnations</td><td>Traditional maternal love flower — warm and deeply meaningful for a mother</td></tr>
    <tr><td>Pink roses</td><td>Universally loved by mothers — warm, beautiful, personal</td></tr>
    <tr><td>Butterscotch or black forest cake</td><td>Nostalgic flavours most associated with a mother's birthday</td></tr>
    <tr><td>Peace lily plant</td><td>Lasting, low-maintenance, calming — grows in her home through the year</td></tr>
    <tr><td>Flowers + cake + peace lily</td><td>The complete birthday gift — flowers for the moment, cake for the celebration, plant for the year</td></tr>
    <tr><td>Morning delivery</td><td>The day begins with her gift — before the household's needs begin</td></tr>
  </tbody>
</table>

<h2>The Gift That Says She Matters First</h2>
<p>For many mothers, their birthday passes without a clear moment that is specifically about them — meals are made, the family's schedule continues, and the day slides by. A morning birthday delivery — flowers arriving before she has started the day's work — creates that moment. It says: today begins with something for you. Before anything else, this is your day. For a mother who lives in another city, a morning delivery is the most tangible evidence that she was in your thoughts before the day began.</p>`,
  faqs: [
    { question: "What is the best birthday gift for a mother in India?", answer: "Pink carnations paired with a butterscotch or black forest cake and a peace lily plant is the most complete mother's birthday gift combination. Alternatively, pink roses with her favourite cake is always warmly appreciated." },
    { question: "Should I include a plant in my mother's birthday gift?", answer: "Yes. A peace lily or money plant alongside flowers and cake creates a lasting birthday gift — the plant grows in her home through the year and remains a daily reminder of the occasion." },
    { question: "Can I send birthday gifts to my mother in another city?", answer: "Yes. RedHeart delivers birthday gifts to mothers across 830+ cities in India with same-day delivery." },
    { question: "Can I get mother's birthday gifts delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "birthday/gifts-for-father",
  categorySlug: "birthday", subcategorySlug: "gifts-for-father", url: "/birthday/gifts-for-father",
  h1: "Birthday Gifts for Father", defaultH1: "Birthday Gifts for Father",
  metaTitle: "Birthday Gifts for Father – Same-Day Delivery India | RedHeart",
  metaDescription: "Send birthday gifts for father with same-day delivery across 830+ cities. Classic flowers, chocolate cake & bonsai from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/birthday/gifts-for-father",
  metaKeyword: "birthday gifts for father India, birthday flowers for dad, birthday cake for dad, same day birthday delivery for father, bonsai birthday gift dad",
  footerContent: `
<h2>Your Father's Birthday — Marking the Day He Rarely Asks to Be Marked</h2>
<p>Fathers typically ask for nothing on their birthdays. They deflect questions about what they want, they decline fuss, and they often spend their own birthdays doing something for someone else. That is precisely why a deliberate birthday gift — flowers, a cake, a plant, something clearly chosen — lands so meaningfully. It is unexpected, and that makes it unforgettable. RedHeart delivers birthday gifts for fathers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Birthday Gifts for Father</h2>
<table>
  <thead><tr><th>Gift</th><th>Why It Works</th></tr></thead>
  <tbody>
    <tr><td>Classic mixed bouquet (warm tones)</td><td>Dignified and celebratory — warm without being delicate</td></tr>
    <tr><td>Chocolate truffle or black forest cake</td><td>Classic, reliably appreciated, adult flavour</td></tr>
    <tr><td>Bonsai plant</td><td>The premium milestone birthday plant — symbolises patience and long-term care</td></tr>
    <tr><td>Snake plant (desk)</td><td>Architectural, low-maintenance, professional</td></tr>
    <tr><td>Flowers + cake + bonsai combo</td><td>The complete, considered birthday gift for a father</td></tr>
  </tbody>
</table>

<h2>A Bonsai for Dad — The Most Thoughtful Milestone Birthday Gift</h2>
<p>For a father's milestone birthday — 50th, 60th, 70th — a bonsai plant is the most meaningful and distinctive gift available. The bonsai mirrors the qualities that define fatherhood: patience, long-term thinking, care that accumulates over years, and the quiet satisfaction of watching something you tend grow into something extraordinary. Paired with a classic mixed bouquet and his preferred cake, a bonsai birthday gift for a father communicates something that few other gifts can.</p>`,
  faqs: [
    { question: "What is the best birthday gift for a father?", answer: "A classic mixed bouquet with chocolate truffle or black forest cake is the reliable choice. A bonsai plant alongside flowers and cake is the most thoughtful and memorable option for milestone birthdays." },
    { question: "Is a bonsai a good birthday gift for a father?", answer: "Yes. Bonsai is among the most thoughtful birthday gifts for fathers — particularly for milestone birthdays. It symbolises patience and long-term care, and it grows with him for years." },
    { question: "Can I send birthday gifts to my father in another city?", answer: "Yes. RedHeart delivers birthday gifts to fathers across 830+ cities in India with same-day delivery." },
    { question: "Can I get father's birthday gifts delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "birthday/gifts-for-friends",
  categorySlug: "birthday", subcategorySlug: "gifts-for-friends", url: "/birthday/gifts-for-friends",
  h1: "Birthday Gifts for Friends", defaultH1: "Birthday Gifts for Friends",
  metaTitle: "Birthday Gifts for Friends – Same-Day Delivery India | RedHeart",
  metaDescription: "Send birthday gifts for friends with same-day delivery across 830+ cities. Colourful flowers, pinata cake & fun hampers from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/birthday/gifts-for-friends",
  metaKeyword: "birthday gifts for friends India, birthday flowers for friends, birthday cake for best friend, same day birthday gifts friends India",
  footerContent: `
<h2>Birthday Gifts for Friends — Celebrating the Best Relationships</h2>
<p>A best friend's birthday is an occasion where you can be more creative, more fun, and more personal than almost any other gifting context. You know their sense of humour, their favourite flavours, their flower preferences, their capacity for a dramatic gesture. Use all of it. RedHeart delivers birthday gifts for friends across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Birthday Gift Ideas for Friends</h2>
<table>
  <thead><tr><th>Friend Type</th><th>Best Gift</th><th>Fun Option</th></tr></thead>
  <tbody>
    <tr><td>Best friend (female)</td><td>Vibrant mixed + strawberry or red velvet cake</td><td>Flowers + pinata cake + chocolate box</td></tr>
    <tr><td>Best friend (male)</td><td>Bold mixed or sunflowers + chocolate truffle</td><td>Flowers + KitKat cake + snacks hamper</td></tr>
    <tr><td>Group of friends</td><td>Large mixed arrangement + large pinata cake</td><td>The shared smashing moment</td></tr>
    <tr><td>Friend who loves plants</td><td>Rare succulent or snake plant + their favourite cake</td><td>Plant + flowers together</td></tr>
    <tr><td>Long-distance friend</td><td>Same-day flower + cake delivery to their city</td><td>Midnight delivery if timing allows</td></tr>
  </tbody>
</table>

<h2>The Long-Distance Birthday Gift for a Best Friend</h2>
<p>Distance does not have to mean a lesser birthday experience. A same-day flower and cake delivery to your best friend's city — arriving before you have even had a chance to call — is one of the most touching birthday gestures available between friends. It says: you are not less celebrated because we are far apart. If anything, the effort of the delivery across cities makes it more meaningful.</p>`,
  faqs: [
    { question: "What is the most fun birthday gift for a best friend?", answer: "A pinata cake paired with a vibrant mixed bouquet and chocolates is the most fun and memorable birthday gift combination for friends — the shared smashing moment creates a birthday memory." },
    { question: "Can I send birthday gifts to a friend in another city?", answer: "Yes. RedHeart delivers same day across 830+ cities in India — perfect for celebrating a long-distance best friend's birthday." },
    { question: "What flowers are best for a best friend's birthday?", answer: "Vibrant mixed bouquets and sunflowers are the most popular birthday flowers for best friends — joyful, celebratory, and matching the warmth of a close friendship." },
  ],
},

{
  pageKey: "birthday/gifts-for-brother",
  categorySlug: "birthday", subcategorySlug: "gifts-for-brother", url: "/birthday/gifts-for-brother",
  h1: "Birthday Gifts for Brother", defaultH1: "Birthday Gifts for Brother",
  metaTitle: "Birthday Gifts for Brother – Same-Day Delivery India | RedHeart",
  metaDescription: "Send birthday gifts for brother with same-day delivery across 830+ cities. Bold flowers, chocolate cake & fun gifts from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/birthday/gifts-for-brother",
  metaKeyword: "birthday gifts for brother India, birthday flowers for brother, birthday cake for brother, same day brother birthday gifts India",
  footerContent: `
<h2>Brother's Birthday — From the Sibling Who Remembered</h2>
<p>A brother's birthday is often marked by the family group, but the gift from a sibling specifically — a sister ordering flowers and cake for her brother's workplace, or a brother sending a vibrant arrangement to a sister — carries a personal weight that the family birthday doesn't. RedHeart delivers birthday gifts for brothers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Birthday Gifts for a Brother</h2>
<table>
  <thead><tr><th>Gift</th><th>Why It Works</th></tr></thead>
  <tbody>
    <tr><td>Bold mixed bouquet + chocolate truffle</td><td>Strong, celebratory, matches a brother's aesthetic</td></tr>
    <tr><td>KitKat cake + flowers</td><td>Fun and visual — the KitKat moment is memorable</td></tr>
    <tr><td>Pinata cake</td><td>Fun and interactive — good for brothers who enjoy the experience</td></tr>
    <tr><td>Snake plant (office delivery)</td><td>Practical, architectural, long-lasting</td></tr>
    <tr><td>Sunflowers + chocolate cake</td><td>Cheerful, celebratory, appropriate</td></tr>
  </tbody>
</table>

<p>For a sister gifting a brother: bold mixed bouquet or sunflowers with a chocolate cake delivered to his office creates a public birthday celebration that he will find genuinely touching. The public element — colleagues noticing — makes it particularly impactful.</p>`,
  faqs: [
    { question: "What birthday flowers are best for a brother?", answer: "Bold mixed bouquets, sunflowers, and yellow roses are the most appropriate birthday flowers for a brother — celebratory and appropriate without being delicate." },
    { question: "Can I send birthday gifts to a brother in another city?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
    { question: "What cake is best for a brother's birthday?", answer: "Chocolate truffle and KitKat cake are the most popular choices for a brother's birthday — rich, fun, and consistently appreciated by men." },
  ],
},

{
  pageKey: "birthday/gifts-for-sister",
  categorySlug: "birthday", subcategorySlug: "gifts-for-sister", url: "/birthday/gifts-for-sister",
  h1: "Birthday Gifts for Sister", defaultH1: "Birthday Gifts for Sister",
  metaTitle: "Birthday Gifts for Sister – Same-Day Delivery India | RedHeart",
  metaDescription: "Send birthday gifts for sister with same-day delivery across 830+ cities. Pink roses, black forest cake & sweet hampers from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/birthday/gifts-for-sister",
  metaKeyword: "birthday gifts for sister India, birthday flowers for sister, birthday cake for sister, same day sister birthday gifts India",
  footerContent: `
<h2>Sister's Birthday — The Gift From Her Person</h2>
<p>A sister's birthday deserves something genuinely personal — the kind of gift that says "I know you" rather than "I got you something." A birthday delivered to her home or office from you specifically, across whatever distance exists between you, is one of the most touching sibling gestures available. RedHeart delivers birthday gifts for sisters across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Birthday Gifts for a Sister</h2>
<table>
  <thead><tr><th>Gift</th><th>Why It Works</th></tr></thead>
  <tbody>
    <tr><td>Pink roses + black forest cake</td><td>Classic, warm, feminine — the birthday sister combination</td></tr>
    <tr><td>Mixed vibrant bouquet + strawberry cake</td><td>Bright, celebratory, beautiful together</td></tr>
    <tr><td>Flowers + pinata cake + chocolates</td><td>The fun sister combination — abundance and celebration</td></tr>
    <tr><td>Red velvet + red roses</td><td>For a sister who appreciates romance and luxury</td></tr>
    <tr><td>Peace lily + pink roses</td><td>Flowers + lasting plant — for a sister who loves her home</td></tr>
  </tbody>
</table>

<p>For sisters in other cities, a same-day delivery of flowers and her favourite cake is one of the most touching birthday gestures available between siblings. It says: we are apart, but I made sure this day felt celebrated where you are.</p>`,
  faqs: [
    { question: "What birthday flowers are best for a sister?", answer: "Pink roses, vibrant mixed bouquets, and mixed bright arrangements are the most popular birthday flowers for sisters — warm, beautiful, and appropriate for the sibling relationship." },
    { question: "Can I send birthday gifts to a sister in another city?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
    { question: "What cake is best for a sister's birthday?", answer: "Black forest, strawberry, and red velvet are the most popular birthday cakes for sisters." },
  ],
},

// ── ANNIVERSARY SUBCATEGORIES ──────────────────────────────────────────────

{
  pageKey: "anniversary/flowers",
  categorySlug: "anniversary", subcategorySlug: "flowers", url: "/anniversary/flowers",
  h1: "Anniversary Flowers Delivery", defaultH1: "Anniversary Flowers Delivery",
  metaTitle: "Anniversary Flowers Online – Midnight Delivery | RedHeart",
  metaDescription: "Send anniversary flowers with midnight & same-day delivery across 830+ cities in India. Red roses & roses-and-lily from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/anniversary/flowers",
  metaKeyword: "anniversary flowers India, send flowers on anniversary, red roses anniversary, roses lily anniversary, midnight anniversary flowers India",
  footerContent: `
<h2>Anniversary Flowers — Marking the Year With the Perfect Gesture</h2>
<p>Red roses for an anniversary is the most universally correct gifting choice in the calendar. A dozen long-stem red roses says "I still choose you" in a language that requires no translation. The roses-and-lily combination says it in a more elaborate, more visually striking register. RedHeart delivers anniversary flowers across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>Anniversary Flower Options</h2>
<table>
  <thead><tr><th>Arrangement</th><th>Message</th><th>Best For</th></tr></thead>
  <tbody>
    <tr><td>12 red roses</td><td>Classic love — timeless and powerful</td><td>Any anniversary</td></tr>
    <tr><td>24 red roses</td><td>Grand romantic statement</td><td>Milestone anniversaries, Valentine's</td></tr>
    <tr><td>Roses and lily</td><td>Premium — romance with elegance</td><td>5th, 10th, 25th anniversary</td></tr>
    <tr><td>White roses / white lilies</td><td>Pure, new beginnings</td><td>25th (Silver) anniversary</td></tr>
    <tr><td>Years-in-roses bouquet</td><td>Deeply personal — each rose = a year</td><td>Any anniversary where the number matters</td></tr>
  </tbody>
</table>

<p>For midnight anniversary delivery — your bouquet arriving at exactly 12 AM — book at least a week ahead. The midnight delivery slots for anniversaries fill early and the gesture is worth the planning.</p>`,
  faqs: [
    { question: "What flowers are best for an anniversary?", answer: "Red roses (12 or 24) are the most romantic and traditional anniversary flower. Roses-and-lily is the premium alternative. White flowers suit silver (25th) anniversaries." },
    { question: "Can I get midnight anniversary flowers delivered?", answer: "Yes. RedHeart offers midnight delivery across hundreds of Indian cities. Book at least a week ahead." },
    { question: "Can I get anniversary flowers delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "anniversary/cakes",
  categorySlug: "anniversary", subcategorySlug: "cakes", url: "/anniversary/cakes",
  h1: "Anniversary Cake Delivery", defaultH1: "Anniversary Cake Delivery",
  metaTitle: "Anniversary Cakes Online – Midnight Delivery | RedHeart",
  metaDescription: "Send anniversary cakes with midnight & same-day delivery across 830+ cities in India. Red velvet, truffle & Ferrero Rocher from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/anniversary/cakes",
  metaKeyword: "anniversary cakes India, red velvet anniversary cake, anniversary cake delivery, midnight anniversary cake, Ferrero Rocher anniversary cake India",
  footerContent: `
<h2>Anniversary Cake — The Celebration That Marks the Year</h2>
<p>An anniversary cake is not just a dessert — it is the centrepiece of the day's celebration. The right cake for an anniversary should reflect the significance of the occasion: richer, more elaborate, and more specifically chosen than a standard birthday cake. RedHeart delivers fresh anniversary cakes across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>Best Anniversary Cakes</h2>
<table>
  <thead><tr><th>Cake</th><th>Why It Works for Anniversary</th><th>Best Pairing</th></tr></thead>
  <tbody>
    <tr><td>Red Velvet</td><td>Deep crimson, romantic, cream cheese — the anniversary cake</td><td>24 red roses</td></tr>
    <tr><td>Ferrero Rocher</td><td>Gold-and-chocolate luxury — premium statement</td><td>Roses and lily</td></tr>
    <tr><td>Dark Chocolate Truffle</td><td>Intensely rich — the serious anniversary cake</td><td>Red roses</td></tr>
    <tr><td>Black Forest</td><td>Classic, celebratory, layered complexity</td><td>White lilies</td></tr>
    <tr><td>Custom / photo cake</td><td>A shared memory printed on the anniversary cake</td><td>Any flowers</td></tr>
  </tbody>
</table>

<p>The red velvet and red roses midnight combination remains the most romantic and most ordered anniversary gift on RedHeart. If you are choosing one thing, choose that — and deliver it at midnight.</p>`,
  faqs: [
    { question: "What is the most romantic anniversary cake?", answer: "Red velvet cake — its deep crimson and cream cheese frosting, paired with red roses, is the most romantically coherent anniversary combination available." },
    { question: "Can I get midnight anniversary cake delivery?", answer: "Yes. RedHeart delivers anniversary cakes at midnight across hundreds of Indian cities." },
    { question: "Can I personalise an anniversary cake?", answer: "Yes. Custom message cakes and photo cakes — with your couple's photo or a shared memory — are available for anniversary orders." },
  ],
},

{
  pageKey: "anniversary/gifts-for-wife",
  categorySlug: "anniversary", subcategorySlug: "gifts-for-wife", url: "/anniversary/gifts-for-wife",
  h1: "Anniversary Gifts for Wife", defaultH1: "Anniversary Gifts for Wife",
  metaTitle: "Anniversary Gifts for Wife – Midnight Delivery India | RedHeart",
  metaDescription: "Send anniversary gifts for wife with midnight & same-day delivery across 830+ cities. Red roses, red velvet & premium hampers from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/anniversary/gifts-for-wife",
  metaKeyword: "anniversary gifts for wife India, anniversary flowers for wife, anniversary cake wife, midnight anniversary delivery wife India",
  footerContent: `
<h2>Anniversary Gifts for Your Wife — The Year She Deserves to Feel</h2>
<p>An anniversary with your wife is not just a calendar event — it is the annual acknowledgement of a choice made repeatedly, every day since the first one. The gift should reflect that weight. Not necessarily expensive. Specifically right. RedHeart delivers anniversary gifts for wives across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>Anniversary Gifts for Wife — Ranked by Impact</h2>
<table>
  <thead><tr><th>Gift</th><th>Impact</th><th>What It Says</th></tr></thead>
  <tbody>
    <tr><td>24 red roses + red velvet cake (midnight)</td><td>Highest</td><td>The anniversary began in my thoughts from its first second</td></tr>
    <tr><td>Roses and lily + Ferrero Rocher cake</td><td>Very high</td><td>Premium, elaborate, I chose the best for you</td></tr>
    <tr><td>Her favourite flowers + her favourite cake</td><td>Most personal</td><td>I remember what you love</td></tr>
    <tr><td>Premium hamper</td><td>High</td><td>The anniversary deserved more than one thing</td></tr>
    <tr><td>Flowers + plant</td><td>Lasting</td><td>Something for the moment and something that grows</td></tr>
  </tbody>
</table>

<p>One principle above all for anniversary gifts for a wife: timing matters more than size. A modest bouquet delivered at midnight communicates more care than an expensive gift delivered at 6 PM. The timing tells her what she was thinking about when the day began.</p>`,
  faqs: [
    { question: "What is the most romantic anniversary gift for a wife?", answer: "24 red roses with red velvet cake delivered at midnight is the most romantic anniversary gift combination — the timing and the visual coherence of both make it unforgettable." },
    { question: "Can I arrange midnight anniversary delivery for my wife?", answer: "Yes. RedHeart offers midnight delivery across hundreds of Indian cities. Book at least a week ahead." },
    { question: "What anniversary flowers are best for a wife?", answer: "Red roses (24) for the grand romantic statement. Roses-and-lily for an elaborate, premium arrangement. Her specific favourite flower for the most personal choice." },
  ],
},

{
  pageKey: "anniversary/gifts-for-husband",
  categorySlug: "anniversary", subcategorySlug: "gifts-for-husband", url: "/anniversary/gifts-for-husband",
  h1: "Anniversary Gifts for Husband", defaultH1: "Anniversary Gifts for Husband",
  metaTitle: "Anniversary Gifts for Husband – Same-Day Delivery | RedHeart",
  metaDescription: "Send anniversary gifts for husband with same-day delivery across 830+ cities. Red roses, chocolate cake & bold bouquets from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/anniversary/gifts-for-husband",
  metaKeyword: "anniversary gifts for husband India, anniversary flowers for husband, anniversary cake husband, office anniversary delivery husband India",
  footerContent: `
<h2>Anniversary Gifts for Your Husband — The Gesture He Didn't Expect</h2>
<p>Anniversary gifting for husbands is most impactful when it breaks expectation. An elaborate anniversary arrangement delivered to his office on the anniversary morning — visible to his colleagues, a public acknowledgement of the occasion — is more memorable than a private gift at home. RedHeart delivers anniversary gifts for husbands across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Anniversary Gifts for Husband — Options</h2>
<table>
  <thead><tr><th>Gift</th><th>Delivery Strategy</th><th>Effect</th></tr></thead>
  <tbody>
    <tr><td>Red roses (24) + chocolate truffle</td><td>Office morning delivery</td><td>Colleagues notice — anniversary becomes public celebration</td></tr>
    <tr><td>Bold mixed + Ferrero Rocher cake</td><td>Home or office</td><td>Premium, indulgent, romantic</td></tr>
    <tr><td>Bonsai + flowers + cake</td><td>Home delivery</td><td>Layered, considered, lasting</td></tr>
    <tr><td>Midnight flowers + cake (home)</td><td>12 AM home delivery</td><td>Private and deeply romantic beginning</td></tr>
  </tbody>
</table>

<p>For anniversary gifts for a husband, the single most impactful choice is usually the one he is least expecting: a public gesture at his office, or a midnight delivery that begins the day before anyone else acknowledges it. The surprise is the gift.</p>`,
  faqs: [
    { question: "What anniversary gifts are best for a husband?", answer: "Red roses delivered to his office on the anniversary morning, paired with a Ferrero Rocher or chocolate truffle cake, is the most impactful anniversary gift for a husband. The public office element makes it particularly memorable." },
    { question: "Should I send anniversary gifts to his office?", answer: "Yes — for most husbands, anniversary flowers arriving at the office is a public romantic statement that his colleagues will notice and that he will remember fondly." },
    { question: "Can I get anniversary gifts for husband delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

// ── WEDDING SUBCATEGORIES ──────────────────────────────────────────────────

{
  pageKey: "wedding/flowers",
  categorySlug: "wedding", subcategorySlug: "flowers", url: "/wedding/flowers",
  h1: "Wedding Flowers Delivery", defaultH1: "Wedding Flowers Delivery",
  metaTitle: "Wedding Flowers Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Send wedding flowers online with same-day delivery across 830+ cities in India. White lilies, roses & premium arrangements from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/wedding/flowers",
  metaKeyword: "wedding flowers India, send flowers for wedding, wedding gift flowers, white lilies wedding India, same day wedding flowers",
  footerContent: `
<h2>Wedding Flowers — The Gift That Fills the Most Important Day With Beauty</h2>
<p>A wedding is among the most photographed days in a person's life. Flowers that arrive for a wedding — as a gift for the couple, as a greeting for the venue — are part of the visual memory of the day. Choose flowers that are elegant, long-lasting, and appropriate for the grandeur of the occasion. RedHeart delivers wedding flowers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Wedding Flower Choices</h2>
<table>
  <thead><tr><th>Flower</th><th>Wedding Significance</th><th>Best Presentation</th></tr></thead>
  <tbody>
    <tr><td>White lilies</td><td>Purity, new beginnings, formal elegance</td><td>Large white lily arrangement</td></tr>
    <tr><td>White roses</td><td>Pure romantic love — classic wedding flower</td><td>Full white rose bouquet</td></tr>
    <tr><td>Mixed whites</td><td>Formal, versatile, universal elegance</td><td>White and cream arrangement</td></tr>
    <tr><td>Red roses</td><td>Romantic celebration — classic and bold</td><td>Long-stem red roses in dozen</td></tr>
    <tr><td>Roses and lily</td><td>Premium — romance with elegance</td><td>Mixed red-white arrangement</td></tr>
  </tbody>
</table>

<p>White lilies and white roses are the most appropriate wedding gift flowers — they match virtually all wedding décor colour schemes and carry the formal elegance appropriate to the occasion. For venue delivery, coordinate the timing with the wedding coordinator to ensure flowers arrive at the right moment.</p>`,
  faqs: [
    { question: "What flowers are best for a wedding gift?", answer: "White lilies, white roses, and mixed white arrangements are the most appropriate and elegant wedding gift flowers." },
    { question: "Can I send flowers to a wedding venue?", answer: "Yes. RedHeart delivers to venues and hotels across 830+ cities. Coordinate with the venue to ensure correct delivery timing." },
    { question: "Can I get wedding flowers delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "wedding/cakes",
  categorySlug: "wedding", subcategorySlug: "cakes", url: "/wedding/cakes",
  h1: "Wedding Cakes Delivery", defaultH1: "Wedding Cakes Delivery",
  metaTitle: "Wedding Cakes Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh wedding cakes online with same-day delivery across 830+ cities in India. Multi-tier, custom & premium cakes from ₹599. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/wedding/cakes",
  metaKeyword: "wedding cakes India, order wedding cake, wedding cake delivery India, same day wedding cake, custom wedding cake online India",
  footerContent: `
<h2>Wedding Cakes — The Most Significant Cake Occasion</h2>
<p>A wedding cake is among the most photographed, most discussed, and most anticipated elements of any wedding. It is cut in front of guests, it appears in almost every wedding album, and it marks the transition from ceremony to celebration in a single, beautiful moment. RedHeart delivers fresh wedding cakes across 830+ cities in India with same-day delivery, starting at ₹599.</p>

<h2>Wedding Cake Choices</h2>
<table>
  <thead><tr><th>Type</th><th>Best For</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>Vanilla with white fondant</td><td>Classic wedding — timeless elegance</td><td>Customisable with floral or pearl decoration</td></tr>
    <tr><td>Red velvet multi-tier</td><td>Modern, romantic weddings</td><td>Dramatic reveal when cut</td></tr>
    <tr><td>Chocolate truffle</td><td>Chocolate-loving couples</td><td>Rich and indulgent — popular as wedding dessert cake</td></tr>
    <tr><td>Custom-designed fondant</td><td>Weddings where the cake is a statement piece</td><td>Designed to match wedding theme and colour palette</td></tr>
    <tr><td>Photo cake</td><td>Anniversary wedding gift</td><td>Couple's photo on the cake</td></tr>
  </tbody>
</table>

<p>For wedding gift occasions — gifting a cake to the couple at their reception or after the wedding — a beautifully presented red velvet or multi-tier vanilla cake is the most elegant option. For the wedding celebration cake itself, consult with RedHeart's custom cake team for designed, themed options.</p>`,
  faqs: [
    { question: "What wedding cakes are available on RedHeart?", answer: "Vanilla, red velvet, chocolate truffle, and custom-designed fondant wedding cakes are available. For highly bespoke designs, coordinate with RedHeart's custom cake team in advance." },
    { question: "Can I order a wedding cake same day?", answer: "Standard wedding cakes are available for same-day delivery. Highly custom-designed cakes require advance booking." },
  ],
},

// ── GIFT HAMPERS SUBCATEGORIES ─────────────────────────────────────────────

{
  pageKey: "gift-hampers/birthday",
  categorySlug: "gift-hampers", subcategorySlug: "birthday", url: "/gift-hampers/birthday",
  h1: "Birthday Gift Hampers Delivery", defaultH1: "Birthday Gift Hampers Delivery",
  metaTitle: "Birthday Gift Hampers Online – Same-Day Delivery | RedHeart",
  metaDescription: "Order birthday gift hampers online with same-day delivery across 830+ cities in India. Flowers, cake & chocolate hampers from ₹599. RedHeart.",
  canonicalUrl: "https://www.redheart.in/gift-hampers/birthday",
  metaKeyword: "birthday gift hampers India, birthday hamper online, send birthday hamper, flowers cake hamper birthday, same day birthday hamper India",
  footerContent: `
<h2>Birthday Gift Hampers — When One Gift Isn't Enough</h2>
<p>A birthday hamper answers the question "is this enough?" before it is asked — because a hamper is always more than one thing. It is layered, abundant, and creates multiple moments of opening and discovery. For a birthday that matters, a gift hamper communicates that you put thought not just into one choice but into assembling several choices that work together. RedHeart delivers birthday gift hampers across 830+ cities in India with same-day delivery, starting at ₹599.</p>

<h2>What to Include in a Birthday Hamper</h2>
<table>
  <thead><tr><th>Element</th><th>Purpose in the Hamper</th><th>Best Choices</th></tr></thead>
  <tbody>
    <tr><td>Flowers</td><td>Visual impact — the emotional welcome</td><td>Pink roses, mixed vibrant, red roses for romance</td></tr>
    <tr><td>Cake</td><td>The celebration itself</td><td>Chocolate truffle, red velvet, pinata for fun</td></tr>
    <tr><td>Chocolates</td><td>The indulgent extra</td><td>Ferrero Rocher box, Dairy Milk assortment</td></tr>
    <tr><td>Plant</td><td>The lasting gift</td><td>Snake plant, money plant for everyday use</td></tr>
    <tr><td>Personalised card</td><td>The human element</td><td>Handwritten message — makes the whole hamper personal</td></tr>
  </tbody>
</table>

<h2>Most Popular Birthday Hamper Combinations</h2>
<p><strong>For her</strong> — pink roses + red velvet cake + Ferrero Rocher chocolates. The most romantic and visually beautiful combination.</p>
<p><strong>For him</strong> — bold mixed bouquet + chocolate truffle cake + Dairy Milk assortment. Bold, rich, and reliably appreciated.</p>
<p><strong>For parents</strong> — flowers + their preferred cake + a plant. The complete gift that delivers beauty, celebration, and something lasting.</p>
<p><strong>For friends</strong> — vibrant mixed + pinata cake + candy box. Fun, abundant, celebratory.</p>`,
  faqs: [
    { question: "What is typically included in a birthday gift hamper?", answer: "A standard birthday hamper includes a fresh flower bouquet, a birthday cake, and chocolates. Premium hampers add a plant or personalised items. All elements are delivered together." },
    { question: "Can I customise a birthday hamper?", answer: "Yes. At checkout, you can select the flower arrangement, cake flavour, and add-ons to customise the hamper for the specific recipient." },
    { question: "Can I get birthday hampers delivered same day?", answer: "Yes. RedHeart delivers birthday hampers the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "gift-hampers/anniversary",
  categorySlug: "gift-hampers", subcategorySlug: "anniversary", url: "/gift-hampers/anniversary",
  h1: "Anniversary Gift Hampers Delivery", defaultH1: "Anniversary Gift Hampers Delivery",
  metaTitle: "Anniversary Gift Hampers Online – Midnight Delivery | RedHeart",
  metaDescription: "Order anniversary gift hampers online with midnight & same-day delivery across 830+ cities in India. Roses, red velvet & chocolate from ₹699. RedHeart.",
  canonicalUrl: "https://www.redheart.in/gift-hampers/anniversary",
  metaKeyword: "anniversary gift hampers India, anniversary hamper online, send anniversary hamper, midnight anniversary hamper India, red roses cake hamper anniversary",
  footerContent: `
<h2>Anniversary Gift Hampers — The Gift That Matches the Occasion</h2>
<p>An anniversary deserves more than one gift. A hamper for an anniversary combines the romantic power of red roses with the indulgence of a luxury cake and the richness of fine chocolates — assembling multiple elements into a single, considered, abundant gift that communicates: this occasion matters to me at every level. RedHeart delivers anniversary gift hampers across 830+ cities in India with same-day and midnight delivery, starting at ₹699.</p>

<h2>Best Anniversary Hamper Combinations</h2>
<table>
  <thead><tr><th>Combination</th><th>Best For</th></tr></thead>
  <tbody>
    <tr><td>24 red roses + red velvet cake + Ferrero Rocher</td><td>The most romantic anniversary hamper — luxury at every level</td></tr>
    <tr><td>Roses and lily + chocolate truffle + Dairy Milk assortment</td><td>Rich and elaborate — for the anniversary that deserves everything</td></tr>
    <tr><td>Red roses + Ferrero Rocher cake + personalised card</td><td>Premium hamper with a personal message</td></tr>
    <tr><td>Flowers + cake + peace lily plant</td><td>The lasting hamper — beauty for the day, something that grows</td></tr>
  </tbody>
</table>

<p>For midnight delivery, the red roses + red velvet cake combination is the most ordered anniversary hamper on RedHeart. The entire hamper arrives at 12 AM, beginning the anniversary day with the most romantic possible gesture.</p>`,
  faqs: [
    { question: "What is the best anniversary hamper?", answer: "24 red roses + red velvet cake + Ferrero Rocher chocolates is the most romantic and most ordered anniversary hamper on RedHeart. The red colour theme across all three elements creates a visually coherent luxury gift." },
    { question: "Can anniversary hampers be delivered at midnight?", answer: "Yes. The entire anniversary hamper — flowers, cake, and chocolates — can be delivered at midnight. Book at least a week ahead to guarantee the slot." },
    { question: "Can I get anniversary hampers delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "gift-hampers/for-her",
  categorySlug: "gift-hampers", subcategorySlug: "for-her", url: "/gift-hampers/for-her",
  h1: "Gift Hampers for Her Delivery", defaultH1: "Gift Hampers for Her Delivery",
  metaTitle: "Gift Hampers for Her Online – Same-Day Delivery | RedHeart",
  metaDescription: "Order gift hampers for her online with same-day delivery across 830+ cities in India. Flowers, cake & chocolate hampers from ₹599. RedHeart.",
  canonicalUrl: "https://www.redheart.in/gift-hampers/for-her",
  metaKeyword: "gift hampers for her India, send gift hamper to her, hamper for girlfriend, hamper for wife India, same day hamper for women India",
  footerContent: `
<h2>Gift Hampers for Her — Beauty, Indulgence, and Abundance</h2>
<p>A gift hamper for her is the gifting option that says "I chose the best things I could find, assembled them specifically for you." For a girlfriend's birthday, a wife's anniversary, a mother's day, or simply because she matters — a hamper for her creates multiple moments of pleasure, not just one. RedHeart delivers gift hampers for her across 830+ cities in India with same-day and midnight delivery, starting at ₹599.</p>

<h2>Gift Hamper Options for Her</h2>
<table>
  <thead><tr><th>Occasion</th><th>Best Hamper</th></tr></thead>
  <tbody>
    <tr><td>Birthday</td><td>Pink roses + red velvet / strawberry cake + Ferrero Rocher</td></tr>
    <tr><td>Anniversary</td><td>24 red roses + red velvet + chocolates (midnight delivery)</td></tr>
    <tr><td>Mother's Day</td><td>Pink carnations + butterscotch cake + peace lily plant</td></tr>
    <tr><td>Valentine's Day</td><td>Red roses + red velvet + Ferrero Rocher (midnight)</td></tr>
    <tr><td>"Just because"</td><td>Her favourite flowers + her preferred cake + chocolates</td></tr>
  </tbody>
</table>

<p>The most personal gift hamper for her is the one built around her specific preferences. If you know her favourite flower, her preferred cake flavour, and her favourite chocolate brand — a hamper assembled from those three choices is more meaningful than any pre-set combination.</p>`,
  faqs: [
    { question: "What is the best gift hamper for a girlfriend?", answer: "Pink roses or red roses + red velvet cake + Ferrero Rocher chocolates is the most popular gift hamper for a girlfriend — romantic, luxurious, and visually beautiful." },
    { question: "Can I personalise a gift hamper for her?", answer: "Yes. At checkout, select your preferred flowers, cake flavour, and chocolate add-ons to create a hamper personalised for her specific preferences." },
    { question: "Can I get a gift hamper for her delivered at midnight?", answer: "Yes. RedHeart offers midnight delivery for hampers across hundreds of Indian cities." },
  ],
},

{
  pageKey: "gift-hampers/for-him",
  categorySlug: "gift-hampers", subcategorySlug: "for-him", url: "/gift-hampers/for-him",
  h1: "Gift Hampers for Him Delivery", defaultH1: "Gift Hampers for Him Delivery",
  metaTitle: "Gift Hampers for Him Online – Same-Day Delivery | RedHeart",
  metaDescription: "Order gift hampers for him online with same-day delivery across 830+ cities in India. Bold flowers, chocolate cake & plants from ₹599. RedHeart.",
  canonicalUrl: "https://www.redheart.in/gift-hampers/for-him",
  metaKeyword: "gift hampers for him India, send gift hamper to him, hamper for boyfriend, hamper for husband India, same day hamper for men India",
  footerContent: `
<h2>Gift Hampers for Him — Bold, Rich, and Assembled With Thought</h2>
<p>A gift hamper for him works when the components are chosen with his tastes in mind — not her preferences. Bold, rich, and visually strong. A dramatic flower arrangement, a premium dark chocolate cake, a luxury chocolate box. Not delicate, not pink, but genuinely impressive and indulgent. RedHeart delivers gift hampers for him across 830+ cities in India with same-day delivery, starting at ₹599.</p>

<h2>Gift Hamper Options for Him</h2>
<table>
  <thead><tr><th>Occasion</th><th>Best Hamper</th><th>Delivery Strategy</th></tr></thead>
  <tbody>
    <tr><td>Birthday</td><td>Bold mixed bouquet + chocolate truffle + Dairy Milk box</td><td>Office delivery for maximum impact</td></tr>
    <tr><td>Anniversary</td><td>Red roses + Ferrero Rocher cake + chocolates</td><td>Office morning delivery</td></tr>
    <tr><td>Father's Day</td><td>Classic mixed + black forest + bonsai plant</td><td>Home delivery — complete and thoughtful</td></tr>
    <tr><td>Valentine's Day</td><td>Red roses + red velvet + Ferrero Rocher (office)</td><td>Morning office delivery</td></tr>
  </tbody>
</table>

<p>For hampers for him, office delivery is almost always the more impactful choice — particularly for birthdays and anniversaries. The public element of flowers arriving at his workplace amplifies the gesture significantly.</p>`,
  faqs: [
    { question: "What is the best gift hamper for a boyfriend or husband?", answer: "Bold mixed bouquet or red roses + chocolate truffle or Ferrero Rocher cake + luxury chocolate box, delivered to his office, is the most impactful gift hamper for men." },
    { question: "Should I deliver his gift hamper to the office?", answer: "Yes — for birthdays and anniversaries, office delivery is the most publicly impactful option. His colleagues see it, and the occasion becomes a shared celebration." },
    { question: "Can I get a gift hamper for him delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "gift-hampers/diwali",
  categorySlug: "gift-hampers", subcategorySlug: "diwali", url: "/gift-hampers/diwali",
  h1: "Diwali Gift Hampers Delivery", defaultH1: "Diwali Gift Hampers Delivery",
  metaTitle: "Diwali Gift Hampers Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order Diwali gift hampers online with same-day delivery across 830+ cities in India. Flowers, plants & sweets hampers from ₹599. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/gift-hampers/diwali",
  metaKeyword: "Diwali gift hampers India, Diwali hamper online, send Diwali hamper, flowers plants Diwali hamper, same day Diwali hamper India",
  footerContent: `
<h2>Diwali Gift Hampers — Celebrating the Festival of Lights With Abundance</h2>
<p>Diwali is India's largest gifting occasion. The festival celebrates abundance, prosperity, and the joy of sharing — and a gift hamper embodies all three qualities. A Diwali hamper that combines fresh flowers, an auspicious plant, and a box of sweets or chocolates creates a complete gift that is warm, auspicious, and far more memorable than another standard mithai box. RedHeart delivers Diwali gift hampers across 830+ cities in India with same-day delivery, starting at ₹599.</p>

<h2>Diwali Hamper Options</h2>
<table>
  <thead><tr><th>Hamper</th><th>What's Included</th><th>Best For</th></tr></thead>
  <tbody>
    <tr><td>Auspicious Living Hamper</td><td>Money plant + mixed warm flowers + Ferrero Rocher</td><td>Family, close friends, premium corporate</td></tr>
    <tr><td>Flowers and Sweets</td><td>Mixed vibrant bouquet + assorted Indian sweets</td><td>Family, neighbours, general Diwali gifting</td></tr>
    <tr><td>Corporate Diwali</td><td>Jade plant + money plant + chocolate box</td><td>Clients, colleagues, corporate relationships</td></tr>
    <tr><td>Premium Gold Hamper</td><td>Yellow roses + Ferrero Rocher cake + money plant</td><td>Premium gifting — gold-themed abundance</td></tr>
    <tr><td>Light and Blooms</td><td>Mixed warm flowers + candle + decorative plant</td><td>Home gifting, decor-conscious recipients</td></tr>
  </tbody>
</table>

<h2>Corporate Diwali Hampers</h2>
<p>Diwali corporate gifting is one of the largest gifting segments in India. A hamper that combines a living plant — money plant, jade, or small bonsai — with fresh flowers and premium chocolates creates a Diwali gift that is more thoughtful, more lasting, and more distinctive than the standard dry fruit or chocolate box. The plant grows in the recipient's office or home through the year — a daily visible reminder of your gifting relationship.</p>`,
  faqs: [
    { question: "What is a good Diwali gift hamper?", answer: "A money plant or jade plant combined with mixed warm flowers and Ferrero Rocher chocolates is the most auspicious and appreciated Diwali hamper. The living plant carries the prosperity symbolism of Diwali beyond the festival day." },
    { question: "Are Diwali hampers available for corporate gifting?", answer: "Yes. RedHeart offers corporate Diwali gifting options — jade plants, money plants, and premium flower-and-plant combinations suitable for client and colleague gifting at scale." },
    { question: "Can I get Diwali hampers delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

];

async function upload() {
  console.log(`Uploading ${pages.length} occasion subcategory pages...\n`);
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
