/**
 * Batch 16 — Gaya, Darbhanga, Ooty, Secunderabad, Nanded,
 *             Latur, Nagercoil, Sagar, Alwar, Bhilwara,
 *             Jorhat, Dibrugarh, Nagaon, Silchar, Tezpur
 * node scripts/seo-city-flowers-16.js
 */
const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "gaya": {
    cityName: "Gaya",
    metaTitle: "Flower Delivery in Gaya | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Gaya with same-day delivery. Roses, marigolds & lotus for Bodh Gaya, Vishnupad, Ram Ghat & all areas. From ₹399.",
    h1: "Flower Delivery in Gaya",
    metaKeyword: "flower delivery in Gaya, online flower delivery Gaya, same day flower delivery Gaya, florist Gaya Bihar, Bodh Gaya flowers",
    footerContent: `<h2>Flower Delivery in Gaya — Where Buddha Found Enlightenment and Pindas Feed the Ancestors</h2>
<p>Gaya is one of the most religiously significant cities in the world — the city closest to Bodh Gaya (10 km away), where Siddhartha Gautama attained enlightenment under the Bodhi tree and became the Buddha. Bodh Gaya's Mahabodhi temple complex (a UNESCO World Heritage Site) draws Buddhist pilgrims from Thailand, Sri Lanka, Japan, China, Korea, Tibet, and across the world continuously. Gaya city itself is sacred to Hindus for Pitru Paksha — the 16-day period when Hindu families come to perform Pind Daan (offerings to ancestors) at the Vishnupad temple on the Falgu river banks. During Pitru Paksha, Gaya receives millions of Hindu pilgrims making it one of the most visited cities in India during this period. Lotus flowers are the sacred offering for both Buddhist temple worship and Hindu Pind Daan. RedHeart delivers fresh flowers across Gaya with same-day and midnight delivery, starting at ₹399.</p>
<p>Gaya Town and the areas near Vishnupad temple are the main zones. The Bodh Gaya tourist corridor (between Gaya and Bodh Gaya) houses numerous hotels and monasteries with consistent flower needs.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gaya, Bihar</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gaya Town, Vishnupad area, Bodh Gaya Road, Tankuppa Road, Manpur, Civil Lines</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Does RedHeart deliver Bodh Gaya temple offerings in Gaya?", answer: "Yes! RedHeart delivers lotus, marigolds, and jasmine for Mahabodhi temple offerings and Vishnupad puja in the Gaya-Bodh Gaya area." },
      { question: "Is same-day flower delivery available in Gaya?", answer: "Yes, RedHeart delivers same-day to Gaya Town, Vishnupad area, and all major Gaya zones." },
      { question: "Is midnight delivery available in Gaya?", answer: "Yes, midnight delivery is available across Gaya." }
    ]
  },
  "darbhanga": {
    cityName: "Darbhanga",
    metaTitle: "Flower Delivery in Darbhanga | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Darbhanga with same-day delivery. Roses, marigolds & bouquets to Laheriasarai, Benta, Darbhanga Town & all areas. From ₹399.",
    h1: "Flower Delivery in Darbhanga",
    metaKeyword: "flower delivery in Darbhanga, online flower delivery Darbhanga, same day flower delivery Darbhanga, florist Darbhanga Bihar Mithila",
    footerContent: `<h2>Flower Delivery in Darbhanga — The Heart of Mithila's Art and Learning</h2>
<p>Darbhanga is the cultural capital of the Mithila region — the ancient kingdom whose boundaries covered northern Bihar and the Terai of Nepal, the same region that gave the world Sita Devi (born at Sitamarhi, near Darbhanga) and the Maithili language. Mithila painting (Madhubani art) — the folk art tradition of painting elaborate geometric and figurative designs with natural colours — originated in this region and is now recognised globally as one of India's most distinctive art forms. The Darbhanga Raj (the maharajas of Darbhanga) were among Bihar's most powerful princely families, great patrons of Sanskrit learning, and the Darbhanga style of Hindustani vocal music (the Darbhanga gharana) is an important classical music tradition. RedHeart delivers fresh flowers across Darbhanga with same-day and midnight delivery, starting at ₹399.</p>
<p>Laheriasarai is Darbhanga's main commercial and residential area. Benta and the areas around Darbhanga station serve the city's transit population. Chhath Puja — Bihar's most distinctive festival — is Darbhanga's biggest flower occasion, with marigolds essential for the Arghya offerings.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Darbhanga, Bihar</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Laheriasarai, Benta, Darbhanga Town, Keoti Road, Kamtaul area</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Darbhanga?", answer: "Yes, RedHeart delivers same-day to Laheriasarai, Benta, Darbhanga Town, and all major areas." },
      { question: "Does RedHeart deliver Chhath Puja flowers in Darbhanga?", answer: "Yes! RedHeart delivers marigolds, lotus, and sugarcane-paired flowers for Chhath Puja in Darbhanga." },
      { question: "Is midnight delivery available in Darbhanga?", answer: "Yes, midnight delivery is available across Darbhanga." }
    ]
  },
  "ooty": {
    cityName: "Ooty",
    metaTitle: "Flower Delivery in Ooty | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Ooty with same-day delivery. Roses, dahlias & bouquets to Charing Cross, Commercial Road, Mysore Road & all Nilgiri areas. From ₹399.",
    h1: "Flower Delivery in Ooty",
    metaKeyword: "flower delivery in Ooty, online flower delivery Ooty Udagamandalam, same day flower delivery Ooty, florist Ooty Nilgiris",
    footerContent: `<h2>Flower Delivery in Ooty — The Queen of Hill Stations Where Flowers Bloom Year-Round</h2>
<p>Ooty (officially Udagamandalam, locally called Udhagamandalam) is the "Queen of Hill Stations" — the Nilgiri hill town at 2,240 metres that the British built as their South Indian summer retreat, and whose colonial bungalows, tea estates, and botanical gardens still define its character. The Government Botanical Gardens in Ooty contain one of the finest collections of Himalayan and Nilgiri plants in the country — the annual Ooty Flower Show held in May in these gardens is one of India's most anticipated horticultural events, drawing tens of thousands of visitors to see elaborate floral exhibits and prize-winning specimens. The Nilgiri blue mountains produce some of India's most famous tea (Nilgiri tea) and coffee, and the Nilgiris' cool, moist climate grows flowers year-round that are remarkable in their variety and freshness. RedHeart delivers fresh flowers across Ooty with same-day and midnight delivery, starting at ₹399.</p>
<p>Charing Cross is Ooty's commercial hub. Commercial Road and Mysore Road are the main arteries. The town's large tourist population — honeymooners, families, and hill-station regulars — generates consistent gifting demand year-round.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ooty (Udagamandalam), Tamil Nadu</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Charing Cross, Commercial Road, Mysore Road, Collector's Office area, Fern Hill, Wenlock Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Ooty?", answer: "Yes, RedHeart delivers same-day to Charing Cross, Commercial Road, Mysore Road, and all Ooty areas." },
      { question: "Do flowers last longer in Ooty's cool climate?", answer: "Yes! Ooty's cool mountain air makes flowers last significantly longer than in plains cities. RedHeart delivers blooms that stay fresh even longer thanks to the Nilgiri climate." },
      { question: "Is midnight delivery available in Ooty?", answer: "Yes, midnight delivery is available across Ooty." }
    ]
  },
  "secunderabad": {
    cityName: "Secunderabad",
    metaTitle: "Flower Delivery in Secunderabad | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Secunderabad with same-day delivery. Roses, marigolds & bouquets to Patny Centre, SD Road, Paradise Circle & all areas. From ₹399.",
    h1: "Flower Delivery in Secunderabad",
    metaKeyword: "flower delivery in Secunderabad, online flower delivery Secunderabad, same day flower delivery Secunderabad, florist Secunderabad Telangana",
    footerContent: `<h2>Flower Delivery in Secunderabad — Hyderabad's Twin City and Cantonment Capital</h2>
<p>Secunderabad is the twin city of Hyderabad — separated by the Hussain Sagar Lake, the two cities together form one of India's largest urban agglomerations. Secunderabad was established in 1806 as the British Cantonment city adjacent to the Nizam's Hyderabad, and its colonial military heritage is visible in its wide cantonment roads, the iconic Secunderabad Clock Tower, and the Trimulgherry military area. The famous Paradise Hotel and Restaurant in Secunderabad (especially its Paradise Circle location) is credited with popularising the Hyderabadi Biryani nationally — the restaurant started here and became a Hyderabadi institution. The city is a major railway hub (Secunderabad Junction is one of South India's busiest terminals) and commercial centre. RedHeart delivers fresh flowers across Secunderabad with same-day and midnight delivery, starting at ₹399.</p>
<p>Patny Centre and SD Road are the main commercial zones. Paradise Circle is the famous biryani-and-food hub. Trimulgherry and the Cantonment areas are major residential zones. The Telugu and Marwari communities ensure strong Ugadi, Diwali, and wedding gifting traditions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Secunderabad, Telangana</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Patny Centre, SD Road, Paradise Circle, Trimulgherry, Cantonment, Malkajgiri, Marredpally</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Secunderabad?", answer: "Yes, RedHeart delivers same-day to Patny Centre, SD Road, Paradise Circle, Trimulgherry, and all Secunderabad areas." },
      { question: "Does RedHeart deliver to Cantonment and Trimulgherry in Secunderabad?", answer: "Yes! RedHeart delivers to all Cantonment residential areas including Trimulgherry, Marredpally, and Cantonment Board zones." },
      { question: "Is midnight delivery available in Secunderabad?", answer: "Yes, midnight delivery is available across Secunderabad." }
    ]
  },
  "nanded": {
    cityName: "Nanded",
    metaTitle: "Flower Delivery in Nanded | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Nanded with same-day delivery. Roses, marigolds & bouquets to Shivaji Nagar, Visava, Gurudwara Road & all areas. From ₹399.",
    h1: "Flower Delivery in Nanded",
    metaKeyword: "flower delivery in Nanded, online flower delivery Nanded, same day flower delivery Nanded, florist Nanded Maharashtra",
    footerContent: `<h2>Flower Delivery in Nanded — Hazur Sahib and the Godavari's Banks</h2>
<p>Nanded is one of the most sacred cities in Sikhism — the Hazur Sahib Gurdwara (Sachkhand Shri Hazur Abchalnagar Sahib) marks the place where the tenth Sikh Guru, Guru Gobind Singh Ji, passed away in 1708 after being fatally wounded by an assassin. This is the Sachkhand (the realm of truth) for Sikhs, and the Hazur Sahib is one of the five Takhts (seats of authority) in Sikhism, making it one of the most revered pilgrimage destinations for Sikhs worldwide. The city sits on the Godavari river in Marathwada, and the regional Marathi and Sikh communities coexist in a city that has Gurpurab and Marathi festival traditions simultaneously. RedHeart delivers fresh flowers across Nanded with same-day and midnight delivery, starting at ₹399.</p>
<p>Shivaji Nagar and Visava are the main residential areas. The Gurudwara Road area around Hazur Sahib draws pilgrims year-round and has consistent flower demand for offerings. Marigold garlands and roses are the most common Hazur Sahib offerings.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nanded, Maharashtra</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shivaji Nagar, Visava, Gurudwara Road, Ardhapur Road, Vazirabad, SRTMU campus</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Does RedHeart deliver Hazur Sahib Gurdwara flowers in Nanded?", answer: "Yes! RedHeart delivers marigold garlands and rose offerings for Hazur Sahib Gurdwara across Nanded." },
      { question: "Is same-day flower delivery available in Nanded?", answer: "Yes, RedHeart delivers same-day to Shivaji Nagar, Visava, Gurudwara Road, and all Nanded areas." },
      { question: "Is midnight delivery available in Nanded?", answer: "Yes, midnight delivery is available across Nanded." }
    ]
  },
  "latur": {
    cityName: "Latur",
    metaTitle: "Flower Delivery in Latur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Latur with same-day delivery. Roses, marigolds & bouquets to Udgir Road, Ausa Road, Babhalgaon & all areas. From ₹399.",
    h1: "Flower Delivery in Latur",
    metaKeyword: "flower delivery in Latur, online flower delivery Latur, same day flower delivery Latur, florist Latur Maharashtra",
    footerContent: `<h2>Flower Delivery in Latur — Marathwada's Resilient City</h2>
<p>Latur is Marathwada's southernmost major city — a commercial and educational hub that is most widely known in Indian memory for the devastating 1993 Killari earthquake (a 6.2 magnitude earthquake that struck at 3:56 AM, killing approximately 10,000 people in the surrounding villages). The city rebuilt itself over the following decades and has emerged as a significant educational centre — the "Latur Pattern" became a byword in Maharashtra for a highly competitive coaching and exam-preparation culture, with Latur's students consistently topping the Maharashtra SSC board examinations and medical entrance tests. The district's major crop is sugarcane, and the sugar cooperative economy shapes Latur's political and economic life. RedHeart delivers fresh flowers across Latur with same-day and midnight delivery, starting at ₹399.</p>
<p>Udgir Road and Ausa Road are the main corridors. Babhalgaon area and the city centre serve the administrative and commercial population. Ganesh Chaturthi and Diwali are the biggest flower occasions in Latur's Marathi community.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Latur, Maharashtra</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Udgir Road, Ausa Road, Babhalgaon, Shahabad Road, Nanded Road, Railway Colony</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Latur?", answer: "Yes, RedHeart delivers same-day to Udgir Road, Ausa Road, Babhalgaon, and all major Latur areas." },
      { question: "Does RedHeart deliver Ganesh Chaturthi flowers in Latur?", answer: "Yes! RedHeart delivers marigolds and red hibiscus for Ganesh Chaturthi puja across Latur." },
      { question: "Is midnight delivery available in Latur?", answer: "Yes, midnight delivery is available across Latur." }
    ]
  },
  "nagercoil": {
    cityName: "Nagercoil",
    metaTitle: "Flower Delivery in Nagercoil | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Nagercoil with same-day delivery. Roses, marigolds & bouquets to Kottar, Suviseshapuram, Kanyakumari Road & all areas. From ₹399.",
    h1: "Flower Delivery in Nagercoil",
    metaKeyword: "flower delivery in Nagercoil, online flower delivery Nagercoil, same day flower delivery Nagercoil, florist Nagercoil Kanyakumari Tamil Nadu",
    footerContent: `<h2>Flower Delivery in Nagercoil — The City at the Tip of India</h2>
<p>Nagercoil is the largest city in Kanyakumari district — the southernmost district of mainland India, where the Indian subcontinent tapers to its tip and the Bay of Bengal, the Arabian Sea, and the Indian Ocean meet. The city is the administrative and commercial capital of a district with a large Christian population (Kanyakumari has one of the highest Christian percentages of any Tamil Nadu district) and significant Malayalam-speaking communities (the district was historically part of Travancore-Cochin before it was merged with Tamil Nadu in 1956). The Nagaraja temple (dedicated to the serpent deity, which gives the city its name — "Nagercoil" means "temple of the serpent") and the Kanyakumari temple at the southernmost tip of India are the two most sacred nearby sites. RedHeart delivers fresh flowers across Nagercoil with same-day and midnight delivery, starting at ₹399.</p>
<p>Kottar is the oldest part of the city. Suviseshapuram is a residential area. The churches, temples, and mosques of this mixed community city all require flowers — white lilies and roses for Christmas, jasmine for Hindu puja, roses for Eid.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagercoil, Tamil Nadu</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kottar, Suviseshapuram, Kanyakumari Road, Marthandam Road, Vadasery, Palliyadi</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Nagercoil?", answer: "Yes, RedHeart delivers same-day to Kottar, Suviseshapuram, Kanyakumari Road, and all Nagercoil areas." },
      { question: "Does RedHeart deliver Christmas flowers in Nagercoil?", answer: "Yes! Nagercoil's large Christian community celebrates Christmas with lilies, roses, and white arrangements. RedHeart delivers for all occasions." },
      { question: "Is midnight delivery available in Nagercoil?", answer: "Yes, midnight delivery is available across Nagercoil." }
    ]
  },
  "sagar": {
    cityName: "Sagar",
    metaTitle: "Flower Delivery in Sagar | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Sagar with same-day delivery. Roses, marigolds & bouquets to Civil Lines, Motipur, Garhakota Road & all areas. From ₹399.",
    h1: "Flower Delivery in Sagar",
    metaKeyword: "flower delivery in Sagar, online flower delivery Sagar MP, same day flower delivery Sagar, florist Sagar Madhya Pradesh",
    footerContent: `<h2>Flower Delivery in Sagar — The Lake City of Bundelkhand</h2>
<p>Sagar is Madhya Pradesh's fifth largest city — the main commercial and educational centre of the Bundelkhand region (the historical heartland of the Chandela Rajputs who built the famous Khajuraho temples nearby). The city takes its name from the Lakha Banjara Lake (called Sagar meaning "lake") at its heart. Dr. Hari Singh Gour University (established 1946, one of India's oldest central universities) is the city's academic centrepiece and has produced several generations of the region's educated elite. Sagar's location in central India, halfway between Bhopal and Jabalpur, makes it a natural trading junction. The Bundelkhand region's dry, rocky landscape makes the lush flower gardens around the Sagar lake even more striking. RedHeart delivers fresh flowers across Sagar with same-day and midnight delivery, starting at ₹399.</p>
<p>Civil Lines is the planned administrative area. Motipur is the commercial hub. The university campus generates academic occasion flower demand. Navratri and Diwali are Sagar's biggest flower occasions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sagar, Madhya Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Motipur, Garhakota Road, Rehli Road, University area, Makroniya</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Sagar?", answer: "Yes, RedHeart delivers same-day to Civil Lines, Motipur, and all major Sagar areas in Madhya Pradesh." },
      { question: "Does RedHeart deliver to Dr. Hari Singh Gour University in Sagar?", answer: "Yes! RedHeart delivers to the university campus and all residential areas in Sagar." },
      { question: "Is midnight delivery available in Sagar?", answer: "Yes, midnight delivery is available across Sagar." }
    ]
  },
  "alwar": {
    cityName: "Alwar",
    metaTitle: "Flower Delivery in Alwar | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Alwar with same-day delivery. Roses, marigolds & bouquets to Jai Complex, Shastri Nagar, Bhiwadi Road & all areas. From ₹399.",
    h1: "Flower Delivery in Alwar",
    metaKeyword: "flower delivery in Alwar, online flower delivery Alwar, same day flower delivery Alwar, florist Alwar Rajasthan",
    footerContent: `<h2>Flower Delivery in Alwar — Gateway to the Aravalli Hills and Tiger Country</h2>
<p>Alwar is the gateway to the Aravalli hills from Delhi — the city closest to Sariska Tiger Reserve (one of India's important tiger conservation areas) and historically the eastern frontier of Rajputana. The Alwar Fort (Bala Qila) — perched dramatically on a rocky hill above the city — is one of the largest forts in Rajasthan and was never captured by the Mughals. The Alwar Royal Family's Siliserh Lake Palace (now a heritage hotel) and the city museum inside the former palace are significant cultural attractions. The Neemrana Fort Palace (a heritage hotel now) outside Alwar is one of India's most celebrated boutique resort destinations. Alwar is also rapidly industrialising — Bhiwadi (part of the Alwar-Bhiwadi industrial belt) is Delhi NCR's major industrial satellite. RedHeart delivers fresh flowers across Alwar with same-day and midnight delivery, starting at ₹399.</p>
<p>Jai Complex and Shastri Nagar are the main residential zones. Bhiwadi Road connects to the industrial belt. The city's location 150 km from Delhi means it benefits from Delhi overflow population — professionals who live in Alwar but work in Delhi.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alwar, Rajasthan</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jai Complex, Shastri Nagar, Bhiwadi Road, Kankroli, Nemi Road, Sariska Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Alwar?", answer: "Yes, RedHeart delivers same-day to Jai Complex, Shastri Nagar, Bhiwadi Road, and all major Alwar areas." },
      { question: "Does RedHeart deliver flowers to Bhiwadi industrial area from Alwar?", answer: "Yes! RedHeart covers Bhiwadi and all areas in the Alwar-Bhiwadi urban agglomeration." },
      { question: "Is midnight delivery available in Alwar?", answer: "Yes, midnight delivery is available across Alwar." }
    ]
  },
  "bhilwara": {
    cityName: "Bhilwara",
    metaTitle: "Flower Delivery in Bhilwara | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Bhilwara with same-day delivery. Roses, marigolds & bouquets to Shyam Nagar, Azad Nagar, Pur Road & all areas. From ₹399.",
    h1: "Flower Delivery in Bhilwara",
    metaKeyword: "flower delivery in Bhilwara, online flower delivery Bhilwara, same day flower delivery Bhilwara, florist Bhilwara Rajasthan",
    footerContent: `<h2>Flower Delivery in Bhilwara — Rajasthan's Textile City</h2>
<p>Bhilwara is Rajasthan's largest textile-manufacturing city — the city produces synthetic suiting, shirting, and industrial fabric on a scale that makes it one of the most important textile hubs in North India. The Rajasthan Spinning and Weaving Mills (RSWM) and numerous other textile companies here export fabric to international markets. Despite this industrial character, Bhilwara has a traditional Rajput and Jain social structure, and the city's traders have long-established connections to the Marwari business network that spans India. The Harni Mahadev temple and the Pur-Umaranda tribal dance traditions (the Bhil people of the surrounding region give the city its name — "city of Bhils") connect Bhilwara to its ancient heritage. RedHeart delivers fresh flowers across Bhilwara with same-day and midnight delivery, starting at ₹399.</p>
<p>Shyam Nagar and Azad Nagar are residential hubs. Pur Road connects to the textile manufacturing areas. Jain festival occasions (Paryushan, Mahavir Jayanti) and Diwali are the main flower demand events.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhilwara, Rajasthan</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shyam Nagar, Azad Nagar, Pur Road, Sanganer Road, Chittorgarh Road, Rail Mandi</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Bhilwara?", answer: "Yes, RedHeart delivers same-day to Shyam Nagar, Azad Nagar, and all major Bhilwara areas." },
      { question: "Does RedHeart deliver Jain puja flowers in Bhilwara?", answer: "Yes! RedHeart delivers lotus, marigolds, and pure white flowers appropriate for Jain festivals and puja in Bhilwara." },
      { question: "Is midnight delivery available in Bhilwara?", answer: "Yes, midnight delivery is available across Bhilwara." }
    ]
  },
  "jorhat": {
    cityName: "Jorhat",
    metaTitle: "Flower Delivery in Jorhat | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Jorhat with same-day delivery. Roses, orchids & bouquets to AT Road, Cinnamara, Bhakat Para & all areas. From ₹399.",
    h1: "Flower Delivery in Jorhat",
    metaKeyword: "flower delivery in Jorhat, online flower delivery Jorhat, same day flower delivery Jorhat, florist Jorhat Assam",
    footerContent: `<h2>Flower Delivery in Jorhat — The Tea Capital of the World</h2>
<p>Jorhat is often called the "Tea Capital of the World" — the city is surrounded by more than 140 tea estates in the upper Assam plains, where the British established tea plantation after tea plantation in the 19th century, and where the distinctive bold, malty Assam Tea (the world's most-used black tea, the base for most blended teas globally including English Breakfast and Irish Breakfast) is grown. The Tocklai Tea Research Institute (established 1911), the world's oldest and largest tea research station, is based in Jorhat. The city is also home to Kaziranga National Park nearby (one-horned rhinoceros) and the Majuli river island — the world's largest river island (on the Brahmaputra), which is also a sacred centre of Vaishnavism in Assam. RedHeart delivers fresh flowers across Jorhat with same-day and midnight delivery, starting at ₹399.</p>
<p>AT Road (Assam Trunk Road) is Jorhat's main commercial artery. Cinnamara and Bhakat Para are residential areas. Bihu — especially Rongali Bihu in April (the Assamese new year) — is Jorhat's most joyous festival when flowers, dance, and music fill the city.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jorhat, Assam</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">AT Road, Cinnamara, Bhakat Para, Mariani Road, Dergaon Road, Kokilamukh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Jorhat?", answer: "Yes, RedHeart delivers same-day to AT Road, Cinnamara, Bhakat Para, and all major Jorhat areas." },
      { question: "Does RedHeart deliver Bihu flowers in Jorhat?", answer: "Yes! RedHeart delivers fresh flower arrangements for Rongali Bihu and all Assamese festivals in Jorhat." },
      { question: "Is midnight delivery available in Jorhat?", answer: "Yes, midnight delivery is available across Jorhat." }
    ]
  },
  "dibrugarh": {
    cityName: "Dibrugarh",
    metaTitle: "Flower Delivery in Dibrugarh | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Dibrugarh with same-day delivery. Roses, orchids & bouquets to Lahoal, Graham Bazar, Shivam Road & all areas. From ₹399.",
    h1: "Flower Delivery in Dibrugarh",
    metaKeyword: "flower delivery in Dibrugarh, online flower delivery Dibrugarh, same day flower delivery Dibrugarh, florist Dibrugarh Assam",
    footerContent: `<h2>Flower Delivery in Dibrugarh — Tea City at the Edge of Arunachal</h2>
<p>Dibrugarh is the largest city in upper Assam — the commercial and medical hub for the eastern tip of the Assam plains, where the Brahmaputra valley narrows toward the mountains of Arunachal Pradesh. Like Jorhat, Dibrugarh is surrounded by tea estates, and the city's economy is deeply tied to the tea trade. Dibrugarh University, one of Assam's premier universities, draws students from across the northeast. The city is also the departure point for Majuli island river ferries and is the starting point for road journeys to the Dibang Valley and Lohit districts of Arunachal Pradesh. The Brahmaputra river ferry at Dibrugarh Ghat connects the city to the north bank. RedHeart delivers fresh flowers across Dibrugarh with same-day and midnight delivery, starting at ₹399.</p>
<p>Lahoal and Graham Bazar are the main commercial zones. Shivam Road and the areas near Dibrugarh University serve the student and professional population. Bihu and Durga Puja are the major flower occasions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dibrugarh, Assam</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lahoal, Graham Bazar, Shivam Road, Dibrugarh University area, AT Road, Charing Chapori</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Dibrugarh?", answer: "Yes, RedHeart delivers same-day to Lahoal, Graham Bazar, AT Road, and all major Dibrugarh areas." },
      { question: "Does RedHeart deliver Bihu and Durga Puja flowers in Dibrugarh?", answer: "Yes! RedHeart delivers fresh flowers for Bihu and Durga Puja across Dibrugarh." },
      { question: "Is midnight delivery available in Dibrugarh?", answer: "Yes, midnight delivery is available across Dibrugarh." }
    ]
  },
  "nagaon": {
    cityName: "Nagaon",
    metaTitle: "Flower Delivery in Nagaon | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Nagaon with same-day delivery. Roses, marigolds & bouquets to Nagaon Town, Raha, Lanka Road & all areas. From ₹399.",
    h1: "Flower Delivery in Nagaon",
    metaKeyword: "flower delivery in Nagaon, online flower delivery Nagaon, same day flower delivery Nagaon, florist Nagaon Assam",
    footerContent: `<h2>Flower Delivery in Nagaon — At the Heart of Assam's Brahmaputra Valley</h2>
<p>Nagaon (also called Nowgong) sits in the centre of Assam's Brahmaputra valley — the geographical and demographic heart of the state. The city is the headquarters of one of Assam's most populous and commercially active districts. The Assam state lottery is headquartered in Nagaon, and the district is a major centre for rice cultivation, silk weaving (Nagaon is a major muga silk producing area), and jute. The Bordowa Satra, the ancestral seat of the Vaishnava reformer Srimanta Shankardev (the 15th-century saint who transformed Assamese culture through the Eka Saran Dharma tradition), is located in Nagaon district. Bihu festivals celebrated in Nagaon carry the same joyous intensity found throughout Assam. RedHeart delivers fresh flowers across Nagaon with same-day and midnight delivery, starting at ₹399.</p>
<p>Nagaon Town and the areas along the Raha-Lanka Road are the main zones. The silk weaving communities of Nagaon have traditions of using flowers in festival preparations. Bihu and Durga Puja are the biggest flower occasions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagaon, Assam</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagaon Town, Raha, Lanka Road, Doboka Road, Jagiroad, Kampur</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Nagaon?", answer: "Yes, RedHeart delivers same-day to Nagaon Town, Raha, Lanka Road, and all major Nagaon areas." },
      { question: "Does RedHeart deliver Bihu flowers in Nagaon?", answer: "Yes! RedHeart delivers marigolds and seasonal flowers for Rongali Bihu and other Assamese festivals in Nagaon." },
      { question: "Is midnight delivery available in Nagaon?", answer: "Yes, midnight delivery is available across Nagaon." }
    ]
  },
  "silchar": {
    cityName: "Silchar",
    metaTitle: "Flower Delivery in Silchar | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Silchar with same-day delivery. Roses, marigolds & bouquets to Ambikapur, Tarapur, Meherpur & all areas. From ₹399.",
    h1: "Flower Delivery in Silchar",
    metaKeyword: "flower delivery in Silchar, online flower delivery Silchar, same day flower delivery Silchar, florist Silchar Assam Barak Valley",
    footerContent: `<h2>Flower Delivery in Silchar — The Bengali Cultural Capital of the Barak Valley</h2>
<p>Silchar is the largest city in the Barak Valley — the linguistically distinct, Bengali-speaking southern region of Assam that shares more cultural affinity with Bangladesh and West Bengal than with the Assamese-speaking Brahmaputra Valley. The Barak Valley was a flash point of the language movement in 1961 when eleven people were killed protesting against the imposition of Assamese as the sole official language — an event commemorated every May 19 as the "Basha Shahid Dibas" (Language Martyrs' Day). Silchar is the commercial and educational hub of Cachar district, home to the National Institute of Technology (NIT Silchar) and several colleges. The city is also known for its proximity to the Bhuban Hills and the Bhuban cave temple. RedHeart delivers fresh flowers across Silchar with same-day and midnight delivery, starting at ₹399.</p>
<p>Ambikapur and Tarapur are the main commercial zones. Meherpur is a residential area. Durga Puja (celebrated with enormous Bengali enthusiasm) and Saraswati Puja are the biggest flower occasions in Silchar.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Silchar, Assam</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ambikapur, Tarapur, Meherpur, NIT Silchar area, Rangirkhari, Sonai Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Silchar?", answer: "Yes, RedHeart delivers same-day to Ambikapur, Tarapur, NIT Silchar area, and all major Silchar areas." },
      { question: "Does RedHeart deliver Durga Puja flowers in Silchar?", answer: "Yes! Silchar celebrates Durga Puja with great Bengali devotion. RedHeart delivers marigolds, lotus, and tuberose for puja pandals across Silchar." },
      { question: "Is midnight delivery available in Silchar?", answer: "Yes, midnight delivery is available across Silchar." }
    ]
  },
  "tezpur": {
    cityName: "Tezpur",
    metaTitle: "Flower Delivery in Tezpur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Tezpur with same-day delivery. Roses, marigolds & bouquets to Tezpur Town, Mahabhairab Road, Kanaklata Nagar & all areas. From ₹399.",
    h1: "Flower Delivery in Tezpur",
    metaKeyword: "flower delivery in Tezpur, online flower delivery Tezpur, same day flower delivery Tezpur, florist Tezpur Assam",
    footerContent: `<h2>Flower Delivery in Tezpur — The Cultural Capital of Assam on the Brahmaputra</h2>
<p>Tezpur (whose name means "city of blood" in Assamese, referring to a mythological battle between Shiva and Vishnu here) is Assam's cultural capital — the city of the Mahabhairab temple (dedicated to Shiva), the Da Parbatia ancient stone sculptures (5th-6th century CE decorative stone carvings), and a thriving Assamese literary and artistic tradition. The city sits on the north bank of the Brahmaputra, with the Tezpur bridge connecting it to the south bank, and the Agnigarh hill (associated with the legend of Banasura and Usha in Bhagavata Purana) overlooking the river. The Air Force base at Tezpur is one of the most important in the northeast. Tezpur University is a prestigious central university. RedHeart delivers fresh flowers across Tezpur with same-day and midnight delivery, starting at ₹399.</p>
<p>Tezpur Town and Mahabhairab Road are the main commercial zones. Kanaklata Nagar (named for Assam's teenage freedom fighter Kanaklata Barua) is residential. Bihu and Durga Puja are the biggest flower occasions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tezpur, Assam</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tezpur Town, Mahabhairab Road, Kanaklata Nagar, Nagshankar, Biswanath Road, Air Force area</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Tezpur?", answer: "Yes, RedHeart delivers same-day to Tezpur Town, Mahabhairab Road, and all major Tezpur areas." },
      { question: "Does RedHeart deliver flowers for Bihu in Tezpur?", answer: "Yes! RedHeart delivers fresh flowers and arrangements for Rongali, Kongali, and Bhogali Bihu in Tezpur." },
      { question: "Is midnight delivery available in Tezpur?", answer: "Yes, midnight delivery is available across Tezpur." }
    ]
  }
};

async function run() {
  for (const [slug, data] of Object.entries(CITIES)) {
    const cityUrl = `/florist-near-me/${slug}`;
    const payload = {
      category: "Flowers", cityName: data.cityName, slug, url: cityUrl,
      metaTitle: data.metaTitle, metaDescription: data.metaDescription,
      h1: data.h1, canonicalUrl: `${BASE_URL}${cityUrl}`,
      metaKeyword: data.metaKeyword,
      breadcrumb: [
        { label: "Home", url: "/" }, { label: "Flowers", url: "/florist-near-me" },
        { label: `Online Flower Delivery in ${data.cityName}`, url: cityUrl },
      ],
      footerContent: data.footerContent.trim(), faqs: data.faqs, isActive: true,
    };
    const res = await fetch(`${API_BASE}/city/upsert`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
    });
    const json = await res.json();
    if (!res.ok) console.error(`❌  ${data.cityName} — ${res.status}`, json);
    else console.log(`✅  ${data.cityName} — ${json._id}`);
  }
  console.log("\nDone — batch 16 complete.");
}
run().catch((err) => { console.error(err); process.exit(1); });
