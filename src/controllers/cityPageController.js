import CityPage from "../models/CityPage.js";

// ── Utility helpers ───────────────────────────────────────────────────────────

/**
 * Convert a raw city string to a URL-safe slug.
 * Steps: lowercase → remove non-ASCII → keep only [a-z0-9 -] → spaces→hyphens
 *        → collapse multiple hyphens → trim leading/trailing hyphens
 */
function toSlug(city) {
  return city
    .toLowerCase()
    .replace(/[^\x00-\x7F]/g, "")          // remove non-ASCII
    .replace(/[^a-z0-9 -]/g, "")            // keep alphanumeric, spaces, hyphens
    .replace(/ +/g, "-")                     // spaces → hyphens
    .replace(/-{2,}/g, "-")                  // collapse multiple hyphens
    .replace(/^-+|-+$/g, "");               // trim leading/trailing hyphens
}

/**
 * Convert a raw city string to Proper Case (each word capitalised).
 */
function toProperCase(city) {
  return city
    .trim()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

// ── Category configuration ────────────────────────────────────────────────────

const CATEGORY_CONFIG = {
  Flowers: {
    urlBase: "/florist-near-me",
    metaTitle:       (proper) => `Flower Delivery in ${proper} | Same Day Fresh Flower Delivery from RedHeart`,
    metaDescription: (proper) => `Shop fresh flowers online in ${proper}: Get same-day & midnight delivery in ${proper}! Your trusted local flower shop in ${proper} - RedHeart. Free Shipping!`,
    h1:              (proper) => `Flower Delivery in ${proper}`,
    metaKeyword:     (proper) => `flower delivery in ${proper}, florist in ${proper}, send flowers to ${proper}, fresh flowers ${proper}, online flower delivery ${proper}, flower shop ${proper}, flowers near me ${proper}, same day flower delivery ${proper}`,
    breadcrumb:      (proper, slug) => [
      { label: "Home",                                url: "/" },
      { label: "Flowers",                             url: "/florist-near-me" },
      { label: `Online Flower Delivery in ${proper}`, url: `/florist-near-me/${slug}` },
    ],
  },

  Cakes: {
    urlBase: "/order-cake-online",
    metaTitle:       (proper) => `Cake Delivery in ${proper} | Same Day Cake Delivery from RedHeart | Upto 20% off`,
    metaDescription: (proper) => `Shop fresh cakes online in ${proper} from RedHeart. Enjoy free same-day & midnight delivery in ${proper} for birthdays, anniversaries & more. Free shipping!`,
    h1:              (proper) => `Cake Delivery in ${proper}`,
    metaKeyword:     (proper) => `cake delivery in ${proper}, order cake online ${proper}, birthday cake ${proper}, online cake delivery ${proper}, cake shop ${proper}, best cake ${proper}, same day cake delivery ${proper}`,
    breadcrumb:      (proper, slug) => [
      { label: "Home",                              url: "/" },
      { label: "Cakes",                             url: "/order-cake-online" },
      { label: `Online Cake Delivery in ${proper}`, url: `/order-cake-online/${slug}` },
    ],
  },

  Plants: {
    urlBase: "/plants-online",
    metaTitle:       (proper) => `Plants Online in ${proper} | Same Day Live Plants Delivery from RedHeart`,
    metaDescription: (proper) => `Order & buy plants online in ${proper} at RedHeart - indoor, outdoor & flowering plants. Fast plant delivery in ${proper}. Same-day delivery. Order Now!`,
    h1:              (proper) => `Plants Online in ${proper}`,
    metaKeyword:     (proper) => `plants online ${proper}, buy plants ${proper}, plant delivery ${proper}, indoor plants ${proper}, online nursery ${proper}, plants near me ${proper}, same day plant delivery ${proper}`,
    breadcrumb:      (proper, slug) => [
      { label: "Home",               url: "/" },
      { label: "Plants",             url: "/plants-online" },
      { label: `Plants to ${proper}`, url: `/plants-online/${slug}` },
    ],
  },
};

// ── FAQ generator ─────────────────────────────────────────────────────────────
// 4 variants per category. Variant selected by: city first-char code % 4
// Ensures different cities get genuinely different questions & answers for SEO.

const FAQ_TEMPLATES = {

  Flowers: [
    // Variant 0  (cities like Agra, Bokaro, Chennai, Delhi, Faridabad …)
    (c) => [
      { question: `How quickly can I get flower delivery in ${c}?`,
        answer: `RedHeart delivers fresh flowers in ${c} within 2–4 hours of placing your order. We offer same-day delivery for orders placed before 5 PM, and midnight delivery for special surprise moments. Our local delivery partners in ${c} ensure every bouquet reaches you in perfect condition.` },
      { question: `What types of flowers are available for delivery in ${c}?`,
        answer: `We offer a wide range of flowers in ${c} including roses, lilies, carnations, gerberas, orchids, sunflowers, and seasonal blooms. Whether you need a single-variety bouquet or a mixed arrangement, RedHeart has options starting from ₹399 to suit every budget and occasion in ${c}.` },
      { question: `Does RedHeart provide midnight flower delivery in ${c}?`,
        answer: `Yes! RedHeart offers midnight flower delivery in ${c} so you can surprise your loved ones at the stroke of 12. This is perfect for birthdays, anniversaries, and romantic gestures. Simply select midnight delivery at checkout and we'll ensure on-time delivery in ${c}.` },
      { question: `Which occasions can I celebrate with flowers in ${c}?`,
        answer: `RedHeart flowers in ${c} are perfect for every occasion — birthdays, anniversaries, Valentine's Day, Mother's Day, weddings, baby showers, housewarmings, corporate events, and more. We also deliver sympathy and get-well-soon arrangements across ${c} with same-day service.` },
      { question: `Is free shipping available on flower delivery in ${c}?`,
        answer: `RedHeart offers free shipping on selected flower orders in ${c}. We regularly run promotions and discounts on bouquets and arrangements. Check our website for current offers and get the freshest flowers delivered to any address in ${c} at the best price.` },
    ],

    // Variant 1  (cities like Guwahati, Hyderabad, Indore, Jaipur, Kanpur …)
    (c) => [
      { question: `Which is the best online flower delivery service in ${c}?`,
        answer: `RedHeart is trusted as the best online flower delivery service in ${c} for its freshness guarantee, on-time delivery, and wide variety. We source flowers directly from farms and deliver them to your doorstep in ${c} within hours, ensuring maximum freshness and quality.` },
      { question: `What is the starting price for flower delivery in ${c}?`,
        answer: `Flower delivery in ${c} starts from just ₹399 on RedHeart. We have a wide range — from affordable single-stem roses to premium designer bouquets and exotic floral arrangements. Whatever your budget, you'll find the perfect flowers for delivery anywhere in ${c}.` },
      { question: `Can I send a surprise flower bouquet in ${c}?`,
        answer: `Absolutely! RedHeart specialises in surprise flower deliveries in ${c}. You can add a personalised message card, choose eco-friendly packaging, and even add chocolates or soft toys to your bouquet. Our discreet delivery team in ${c} ensures the surprise stays a secret until delivery.` },
      { question: `What floral arrangements can I order for delivery in ${c}?`,
        answer: `RedHeart offers bouquets, hand-tied arrangements, flower baskets, heart-shaped arrangements, flower boxes, and vase arrangements for delivery in ${c}. Each arrangement is freshly prepared and packed carefully so it arrives in ${c} looking as beautiful as when it was made.` },
      { question: `How do I track my flower order in ${c}?`,
        answer: `After placing your flower delivery order in ${c} on RedHeart, you'll receive an order confirmation via SMS and email. Our delivery team will contact you before arriving. You can also reach our customer support to get a real-time status update of your flower delivery in ${c}.` },
    ],

    // Variant 2  (cities like Lucknow, Mumbai, Nagpur, Ooty, Patna …)
    (c) => [
      { question: `Can I order flowers online for delivery in ${c}?`,
        answer: `Yes, RedHeart makes it easy to order flowers online in ${c}. Browse our full catalogue at redheart.in, select your favourite arrangement, choose a delivery slot, and we'll deliver fresh flowers right to the door in ${c}. We accept all major payment methods including UPI, cards, and net banking.` },
      { question: `Are the flowers delivered fresh and in good condition in ${c}?`,
        answer: `Freshness is our top priority. All flowers delivered in ${c} by RedHeart are sourced from trusted farms, stored in temperature-controlled facilities, and packed with care. We use special packaging to prevent damage during transit, so every bouquet arrives fresh, vibrant, and long-lasting in ${c}.` },
      { question: `Can I schedule flower delivery for a specific time in ${c}?`,
        answer: `Yes! RedHeart allows you to schedule flower delivery in ${c} for a specific date and time slot. You can choose from morning, afternoon, evening, or midnight delivery windows. This makes it easy to plan a surprise or ensure the recipient is home to receive the flowers in ${c}.` },
      { question: `What are the best flowers to gift someone in ${c}?`,
        answer: `Roses are the classic choice, but in ${c} our bestsellers also include tulips, lilies, gerberas, and mixed seasonal bouquets. For romantic occasions, red roses; for celebrations, sunflowers and gerberas; for sympathy, white lilies. Our florists can also create custom arrangements for any need in ${c}.` },
      { question: `Does RedHeart deliver flowers to all areas in ${c}?`,
        answer: `RedHeart delivers flowers across all major areas and neighbourhoods in ${c}. Whether it's the city centre, residential colonies, offices, or hospitals in ${c}, we ensure timely and safe delivery. Enter your pincode at checkout to confirm availability and delivery time for your specific location in ${c}.` },
    ],

    // Variant 3  (cities like Ranchi, Surat, Thane, Udaipur, Varanasi, Warangal …)
    (c) => [
      { question: `How do I send flowers to someone in ${c}?`,
        answer: `Sending flowers to ${c} with RedHeart is simple. Visit redheart.in, choose your bouquet or arrangement, enter the recipient's address in ${c}, select a delivery slot, and complete payment. We take care of everything else — from fresh packaging to on-time delivery at the address in ${c}.` },
      { question: `What is the delivery time for flower orders in ${c}?`,
        answer: `RedHeart delivers flowers in ${c} within 2–4 hours for same-day orders placed before 5 PM. Express delivery in under 3 hours is also available for select areas in ${c}. You can also pre-schedule deliveries for future dates to ensure flowers arrive exactly when you want in ${c}.` },
      { question: `Does RedHeart offer same-day flower delivery for birthdays in ${c}?`,
        answer: `Yes! RedHeart is the go-to platform for same-day birthday flower delivery in ${c}. Even if you've remembered last minute, we can arrange fresh birthday bouquets, flower cakes, and floral gifts delivered within hours anywhere in ${c}. We also offer free personalised birthday cards with every order.` },
      { question: `What makes RedHeart the best florist in ${c}?`,
        answer: `RedHeart stands out in ${c} for its farm-fresh flowers, wide variety of arrangements, affordable pricing starting at ₹399, and reliable same-day delivery. Our dedicated local delivery team in ${c} ensures every order reaches on time. We've served thousands of happy customers across ${c} and continue to grow.` },
      { question: `Can I send flowers for any occasion in ${c}?`,
        answer: `RedHeart in ${c} covers every occasion — birthdays, anniversaries, Valentine's Day, Mother's Day, Women's Day, Diwali, Christmas, and more. We have occasion-specific collections with curated bouquets, add-on gifts like chocolates and teddy bears, and personalised messages to make your gift truly memorable in ${c}.` },
    ],
  ],

  Cakes: [
    // Variant 0
    (c) => [
      { question: `How quickly can I get cake delivery in ${c}?`,
        answer: `RedHeart offers same-day cake delivery in ${c} for orders placed before 5 PM. We also offer midnight cake delivery for birthday surprises. Our bakers and delivery partners in ${c} ensure every cake reaches you fresh, perfectly iced, and on time — often within 2–4 hours.` },
      { question: `What types of cakes are available for delivery in ${c}?`,
        answer: `We deliver a wide variety of cakes in ${c} — chocolate, vanilla, butterscotch, black forest, red velvet, fruit, pineapple, and more. We also offer eggless cakes, photo cakes, designer cakes, and custom theme cakes in ${c} for birthdays, weddings, and corporate celebrations.` },
      { question: `Does RedHeart offer midnight cake delivery in ${c}?`,
        answer: `Yes! RedHeart provides midnight cake delivery in ${c} between 11 PM and 12 AM. It's the perfect way to surprise your loved ones on their birthday or anniversary. Simply choose midnight delivery at checkout and we'll make sure the cake arrives at the stroke of midnight in ${c}.` },
      { question: `Can I order a custom cake for a birthday in ${c}?`,
        answer: `Absolutely! RedHeart offers custom and personalised birthday cakes in ${c}. You can add a name, message, or photo on the cake. Choose from a variety of flavours, frostings, and sizes. Our expert bakers in ${c} craft every cake with care to make birthdays extra special.` },
      { question: `What is the starting price for cake delivery in ${c}?`,
        answer: `Cake delivery in ${c} on RedHeart starts from ₹499. We offer a range of options from small celebration cakes to large designer creations. With regular offers and up to 20% off on select cakes, RedHeart is the most affordable and delicious cake delivery option in ${c}.` },
    ],

    // Variant 1
    (c) => [
      { question: `Which is the best cake delivery service in ${c}?`,
        answer: `RedHeart is one of the most trusted cake delivery platforms in ${c}, known for fresh ingredients, stunning designs, and on-time delivery. Whether it's a birthday, anniversary, or corporate event cake, RedHeart in ${c} delivers quality you can taste and enjoy every time.` },
      { question: `Are eggless cakes available for delivery in ${c}?`,
        answer: `Yes! RedHeart offers a full range of eggless cakes for delivery in ${c}. Whether you or your recipient is vegetarian or has dietary preferences, our eggless collection includes chocolate, vanilla, butterscotch, red velvet, and fruit cakes — all equally delicious and beautifully decorated for ${c}.` },
      { question: `Can I get a photo cake delivered in ${c}?`,
        answer: `Yes! RedHeart offers photo cake delivery in ${c}. Upload any image during checkout and our bakers will print it on an edible rice paper topping. Photo cakes are a wonderful personalised gift for birthdays and anniversaries in ${c} and are available in multiple flavours and sizes.` },
      { question: `Can I schedule cake delivery for a specific time in ${c}?`,
        answer: `Yes, RedHeart allows you to choose a specific delivery window for cake orders in ${c} — morning, afternoon, evening, or midnight. Pre-scheduling your cake delivery in ${c} is especially helpful for surprise parties and celebrations so the cake arrives at exactly the right moment.` },
      { question: `Does RedHeart deliver cakes on the same day in ${c}?`,
        answer: `Yes, same-day cake delivery is available in ${c} for orders placed before 5 PM. For urgent requirements, express delivery is also available in select areas of ${c}. RedHeart ensures your celebration never misses a beat with fast, fresh, and reliable cake delivery across ${c}.` },
    ],

    // Variant 2
    (c) => [
      { question: `Can I order a cake online for delivery in ${c}?`,
        answer: `Ordering a cake online for delivery in ${c} is easy with RedHeart. Visit redheart.in, browse our cake catalogue, choose your flavour and design, enter the delivery address in ${c}, and pay securely. Your cake will be freshly baked and delivered to your doorstep in ${c} on the selected date.` },
      { question: `What flavours of cake are available for delivery in ${c}?`,
        answer: `RedHeart offers an extensive flavour menu for cake delivery in ${c} — chocolate truffle, vanilla cream, butterscotch, black forest, strawberry, pineapple, red velvet, blueberry, and many more. Seasonal and premium flavours are also available for special orders in ${c} on request.` },
      { question: `Does RedHeart deliver designer cakes in ${c}?`,
        answer: `Yes, RedHeart delivers stunning designer cakes in ${c} for weddings, baby showers, milestone birthdays, and corporate events. Our designer cakes in ${c} are hand-crafted with premium fondant, edible prints, and intricate decorations. Place orders in advance for fully customised designer creations in ${c}.` },
      { question: `Is there free delivery for cake orders in ${c}?`,
        answer: `RedHeart offers free delivery on selected cake orders in ${c} above a certain cart value. We also run regular discount campaigns with up to 20% off. Check our website for the latest cake delivery offers in ${c} and enjoy the freshest cakes at the best price.` },
      { question: `Can I send a cake as a gift to someone in ${c}?`,
        answer: `Yes! Sending a cake as a gift in ${c} is simple with RedHeart. Choose the recipient's address in ${c}, add a personalised gift message, and select a surprise delivery slot. We deliver in discreet, beautiful packaging so the cake feels like a thoughtful, professionally presented gift in ${c}.` },
    ],

    // Variant 3
    (c) => [
      { question: `How do I order a birthday cake for delivery in ${c}?`,
        answer: `To order a birthday cake in ${c}, visit RedHeart, select your preferred flavour and size, add a name or message, enter the delivery address in ${c}, and checkout. We handle fresh baking and on-time delivery. You can also add candles, balloons, or flower combos to make the birthday extra special in ${c}.` },
      { question: `What is the delivery time for cake orders in ${c}?`,
        answer: `RedHeart delivers cakes in ${c} within 2–4 hours for same-day orders. Midnight delivery slots are also available for birthday surprises. Our reliable delivery network across ${c} ensures your cake arrives on time, intact, and as beautiful as it looks on the website.` },
      { question: `Does RedHeart deliver wedding cakes in ${c}?`,
        answer: `Yes! RedHeart delivers custom wedding cakes in ${c} for ceremonies of all sizes. We offer multi-tier cakes, fondant-decorated creations, and floral cake designs that complement your wedding theme in ${c}. Pre-order your wedding cake at least 3–5 days in advance for the best results in ${c}.` },
      { question: `What makes RedHeart the best cake shop in ${c}?`,
        answer: `RedHeart is trusted in ${c} for its freshly baked cakes, premium ingredients, beautiful designs, and dependable delivery. We use no artificial colours in our cream cakes, offer both eggless and regular options, and customise every cake to your exact requirement — making us the top cake delivery choice in ${c}.` },
      { question: `Can I order a cake for corporate events in ${c}?`,
        answer: `Absolutely! RedHeart delivers bulk and branded cakes for corporate events, office celebrations, product launches, and team milestones in ${c}. We offer special pricing for bulk corporate cake orders in ${c} and can add company logos, messages, or event themes to each cake.` },
    ],
  ],

  Plants: [
    // Variant 0
    (c) => [
      { question: `How quickly can I get plant delivery in ${c}?`,
        answer: `RedHeart offers same-day plant delivery in ${c} for orders placed before 5 PM. Our plants are carefully packed to prevent damage during transit and delivered right to your door in ${c} by our trained delivery team. Express delivery is also available in select areas of ${c}.` },
      { question: `What types of plants are available for delivery in ${c}?`,
        answer: `RedHeart delivers a wide variety of plants in ${c} including indoor plants, outdoor plants, succulents, flowering plants, lucky bamboo, bonsai, money plants, air-purifying plants, and more. We curate plants that thrive in Indian home conditions and are perfect for gifting in ${c}.` },
      { question: `Are indoor plants available for delivery in ${c}?`,
        answer: `Yes! RedHeart specialises in indoor plant delivery in ${c}. From low-maintenance succulents and snake plants to lush pothos and peace lilies, we have plants that suit every home and office in ${c}. Each plant comes with basic care instructions to help it thrive after delivery in ${c}.` },
      { question: `Can I gift a plant to someone in ${c}?`,
        answer: `Plants make wonderful, long-lasting gifts! RedHeart offers beautifully packaged plant gifts for delivery in ${c}. Choose from a wide range of potted plants, combo plant sets, and plant gift hampers. Add a personal message and we'll deliver the gift directly to the recipient in ${c}.` },
      { question: `What is the starting price for plant delivery in ${c}?`,
        answer: `Plant delivery in ${c} on RedHeart starts from as low as ₹299. We have options for every budget — from affordable succulents and small desk plants to premium large indoor plants and rare varieties. Check our plant catalogue for the latest prices and offers on delivery in ${c}.` },
    ],

    // Variant 1
    (c) => [
      { question: `Which is the best online plant nursery for delivery in ${c}?`,
        answer: `RedHeart is a trusted online plant delivery platform in ${c} known for healthy, well-rooted plants, secure packaging, and timely delivery. All plants dispatched to ${c} go through quality checks to ensure they arrive in the best condition and ready to grow in their new home.` },
      { question: `Are air-purifying plants available for delivery in ${c}?`,
        answer: `Yes! RedHeart offers a curated range of air-purifying plants for delivery in ${c}. Popular choices include spider plants, peace lilies, areca palms, snake plants, and pothos — all proven to improve indoor air quality. These plants are perfect for homes and offices in ${c}.` },
      { question: `Can I get a lucky bamboo plant delivered in ${c}?`,
        answer: `Yes! Lucky bamboo is one of RedHeart's bestsellers for plant delivery in ${c}. Available in 2, 3, 7, and 21 stalks, lucky bamboo is a popular Vastu and feng shui gift for housewarmings, Diwali, and corporate events. We deliver fresh lucky bamboo arrangements across all areas of ${c}.` },
      { question: `How are plants packaged for delivery in ${c}?`,
        answer: `RedHeart uses specialised packaging for all plant deliveries in ${c}. Each plant is secured in its pot with protective wrapping, surrounded by cushioning material, and placed in a sturdy box. This prevents soil spillage and damage during transit, ensuring every plant arrives safely in ${c}.` },
      { question: `Can I order plants for office delivery in ${c}?`,
        answer: `Yes! RedHeart offers office plant delivery in ${c} for desks, common areas, lobbies, and meeting rooms. Choose from desk plants, floor plants, and hanging planters. We also offer bulk orders with special pricing for corporate plant deliveries across offices in ${c}.` },
    ],

    // Variant 2
    (c) => [
      { question: `Can I order plants online for delivery in ${c}?`,
        answer: `Yes! Ordering plants online in ${c} is easy with RedHeart. Browse our plant catalogue at redheart.in, select your plant, and we'll deliver it safely to your address in ${c}. All plants are packed in secure, eco-friendly packaging to ensure they arrive healthy and undamaged in ${c}.` },
      { question: `What are the best indoor plants for homes in ${c}?`,
        answer: `Some of the best indoor plants for homes in ${c} available on RedHeart include money plant, snake plant, ZZ plant, pothos, peace lily, and rubber plant. These are low-maintenance, thrive indoors in ${c}'s climate, and are great for improving air quality and adding greenery to your home.` },
      { question: `Does RedHeart deliver succulents and cacti in ${c}?`,
        answer: `Yes! RedHeart delivers a lovely range of succulents and mini cacti in ${c}. These low-maintenance plants are perfect for balconies, window sills, and office desks in ${c}. They come in decorative pots and are ideal as gifts or for adding a touch of green to any space in ${c}.` },
      { question: `Is same-day plant delivery available in ${c}?`,
        answer: `Yes, RedHeart offers same-day plant delivery in ${c} for orders placed before 5 PM. Whether it's a housewarming gift, a birthday surprise, or a plant for your own home, we ensure quick and careful delivery to your doorstep in ${c} on the same day you order.` },
      { question: `Are flowering plants available for delivery in ${c}?`,
        answer: `Yes! RedHeart delivers a beautiful range of flowering plants in ${c} including anthuriums, peace lilies, orchids, hibiscus, and jasmine. These plants bring colour and fragrance to any space. They're popular choices for gifting and home decoration and are available for delivery in ${c}.` },
    ],

    // Variant 3
    (c) => [
      { question: `How do I send a plant as a gift in ${c}?`,
        answer: `Sending a plant gift in ${c} with RedHeart is simple. Choose a plant from our gifting collection, add a personalised message, enter the recipient's address in ${c}, and we'll deliver it in beautiful gift packaging. Plant gifts are perfect for housewarmings, birthdays, and corporate occasions in ${c}.` },
      { question: `What is the delivery time for plant orders in ${c}?`,
        answer: `RedHeart delivers plants in ${c} within 2–4 hours for same-day orders. Our careful handling and quick dispatch ensure every plant reaches ${c} in the healthiest condition. Pre-scheduled deliveries for future dates are also available so you can plan plant gifts well in advance in ${c}.` },
      { question: `Does RedHeart offer bonsai plant delivery in ${c}?`,
        answer: `Yes! RedHeart delivers stunning bonsai plants in ${c}. From ficus and jade bonsai to Chinese elm and banyan varieties, our collection is carefully cultivated and beautifully shaped. Bonsai make exceptional gifts for plant lovers and are delivered safely in secure packaging across all areas of ${c}.` },
      { question: `What makes RedHeart the best plant delivery service in ${c}?`,
        answer: `RedHeart is trusted in ${c} for its healthy, nursery-fresh plants, secure packaging, and same-day delivery. All our plants go through quality checks before dispatch, come with care guides, and are priced affordably starting from ₹299. We have served thousands of happy plant lovers across ${c}.` },
      { question: `Can I buy rare or exotic plants online for delivery in ${c}?`,
        answer: `Yes! RedHeart stocks a range of rare and exotic houseplants for delivery in ${c} including monstera, philodendrons, string of pearls, echeverias, and more. Exotic plant availability varies by season. Check our website regularly for new arrivals and limited-edition plant collections available in ${c}.` },
    ],
  ],
};

/**
 * Pick FAQ variant for a city based on its first character code.
 * This ensures cities starting with different letters get different questions,
 * making each city page genuinely unique for SEO.
 */
function generateFaqs(category, proper) {
  const variants = FAQ_TEMPLATES[category];
  if (!variants) return [];
  const idx = (proper.charCodeAt(0) || 0) % variants.length;
  return variants[idx](proper);
}

// ── Data generator ────────────────────────────────────────────────────────────

function generateCityData(category, rawCity) {
  const cfg    = CATEGORY_CONFIG[category];
  const proper = toProperCase(rawCity);
  const slug   = toSlug(rawCity);
  const url    = `${cfg.urlBase}/${slug}`;

  return {
    category,
    cityName:        proper,
    slug,
    url,
    metaTitle:       cfg.metaTitle(proper),
    metaDescription: cfg.metaDescription(proper),
    h1:              cfg.h1(proper),
    canonicalUrl:    `https://www.redheart.in${url}`,
    metaKeyword:     cfg.metaKeyword(proper),
    breadcrumb:      cfg.breadcrumb(proper, slug),
    footerContent:   "",
    faqs:            generateFaqs(category, proper),
    isActive:        true,
  };
}

// ── Controller functions ──────────────────────────────────────────────────────

/**
 * GET /api/city/cities/:category
 * Returns all city pages for a given category, sorted by cityName.
 */
export async function getCities(req, res) {
  try {
    const { category } = req.params;
    if (!CATEGORY_CONFIG[category]) {
      return res.status(400).json({ message: "Invalid category" });
    }
    const cities = await CityPage.find({ category }).sort({ cityName: 1 });
    return res.json(cities);
  } catch (err) {
    console.error("getCities error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

/**
 * POST /api/city/cities
 * Body: { category, cityName }
 * Adds a single city page. Returns 409 on duplicate.
 */
export async function addCity(req, res) {
  try {
    const { category, cityName } = req.body;
    if (!category || !cityName) {
      return res.status(400).json({ message: "category and cityName are required" });
    }
    if (!CATEGORY_CONFIG[category]) {
      return res.status(400).json({ message: "Invalid category" });
    }

    const data = generateCityData(category, cityName);
    const city = await CityPage.create(data);
    return res.status(201).json(city);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "City already exists for this category" });
    }
    console.error("addCity error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

/**
 * POST /api/city/cities/bulk
 * Body: { category, cityNames: ["Bangalore", "Mumbai", ...] }
 * Returns { added: [], skipped: [], errors: [] }
 */
export async function addCitiesBulk(req, res) {
  try {
    const { category, cityNames } = req.body;
    if (!category || !Array.isArray(cityNames) || cityNames.length === 0) {
      return res.status(400).json({ message: "category and cityNames[] are required" });
    }
    if (!CATEGORY_CONFIG[category]) {
      return res.status(400).json({ message: "Invalid category" });
    }

    const added   = [];
    const skipped = [];
    const errors  = [];

    for (const rawCity of cityNames) {
      const name = (rawCity || "").trim();
      if (!name) continue;

      try {
        const data = generateCityData(category, name);
        await CityPage.create(data);
        added.push(data.cityName);
      } catch (err) {
        if (err.code === 11000) {
          skipped.push(toProperCase(name));
        } else {
          errors.push({ city: name, error: err.message });
        }
      }
    }

    return res.json({ added, skipped, errors });
  } catch (err) {
    console.error("addCitiesBulk error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

/**
 * PUT /api/city/cities/:id
 * Body: { metaTitle, metaDescription, h1, canonicalUrl, metaKeyword, footerContent, faqs }
 * Updates only SEO-editable fields.
 */
export async function updateCity(req, res) {
  try {
    const { id } = req.params;
    const allowed = ["metaTitle", "metaDescription", "h1", "canonicalUrl", "metaKeyword", "footerContent", "faqs"];
    const update  = {};
    for (const key of allowed) {
      if (req.body[key] !== undefined) update[key] = req.body[key];
    }

    const city = await CityPage.findByIdAndUpdate(id, { $set: update }, { new: true, runValidators: true });
    if (!city) return res.status(404).json({ message: "City not found" });
    return res.json(city);
  } catch (err) {
    console.error("updateCity error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

/**
 * DELETE /api/city/cities/:id
 * Deletes a city page by _id.
 */
export async function deleteCity(req, res) {
  try {
    const { id } = req.params;
    const city = await CityPage.findByIdAndDelete(id);
    if (!city) return res.status(404).json({ message: "City not found" });
    return res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error("deleteCity error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

/**
 * POST /api/city/cities/regenerate/:category
 * Admin route — re-applies current templates to all cities for a given category.
 * Only updates metaKeyword, metaTitle, metaDescription, h1, breadcrumb, canonicalUrl
 * so that manually customised footerContent and faqs are preserved.
 */
export async function regenerateCities(req, res) {
  try {
    const { category } = req.params;
    if (!CATEGORY_CONFIG[category]) {
      return res.status(400).json({ message: "Invalid category" });
    }

    const cities = await CityPage.find({ category });
    let updated = 0;

    for (const city of cities) {
      const cfg    = CATEGORY_CONFIG[category];
      const proper = city.cityName;
      const slug   = city.slug;
      const url    = city.url;

      await CityPage.findByIdAndUpdate(city._id, {
        $set: {
          metaTitle:       cfg.metaTitle(proper),
          metaDescription: cfg.metaDescription(proper),
          h1:              cfg.h1(proper),
          metaKeyword:     cfg.metaKeyword(proper),
          canonicalUrl:    `https://www.redheart.in${url}`,
          breadcrumb:      cfg.breadcrumb(proper, slug),
        },
      });
      updated++;
    }

    return res.json({ message: `Regenerated ${updated} cities for ${category}.`, updated });
  } catch (err) {
    console.error("regenerateCities error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

/**
 * GET /api/city/page/:category/:slug
 * Public route — returns active city page for frontend rendering.
 */
export async function getCityPage(req, res) {
  try {
    const { category, slug } = req.params;
    const city = await CityPage.findOne({ category, slug, isActive: true });
    if (!city) return res.status(404).json({ message: "Page not found" });
    return res.json(city);
  } catch (err) {
    console.error("getCityPage error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}
