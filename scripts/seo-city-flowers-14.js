/**
 * Batch 14 — Belagavi, Shivamogga, Tumakuru, Udupi, Davangere,
 *             Rohtak, Panipat, Karnal, Sonipat, Yamunanagar,
 *             Ambala, Panchkula, Bathinda, Sangli, Dhanbad
 * node scripts/seo-city-flowers-14.js
 */
const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "belagavi": {
    cityName: "Belagavi",
    metaTitle: "Flower Delivery in Belagavi | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Belagavi with same-day delivery. Roses, marigolds & bouquets to Camp, Tilakwadi, Khanapur Road & all areas. From ₹399.",
    h1: "Flower Delivery in Belagavi",
    metaKeyword: "flower delivery in Belagavi, online flower delivery Belagavi Belgaum, same day flower delivery Belagavi, florist Belagavi Karnataka",
    footerContent: `<h2>Flower Delivery in Belagavi — Karnataka's Border City Between Two Cultures</h2>
<p>Belagavi (historically known as Belgaum) is Karnataka's northwestern border city — a place where Kannada and Marathi cultures meet, overlap, and sometimes collide. The city has been the subject of a long-running territorial dispute between Karnataka and Maharashtra (the Belagavi Dispute), since a significant portion of the city's population speaks Marathi. Despite this, Belagavi has a strong Kannada administrative identity and serves as the host city for the Karnataka winter legislature sessions. The city's military presence is significant — the Belagavi Cantonment is one of India's largest and oldest, and the Maratha Light Infantry Regimental Centre is headquartered here. Belagavi is also an educational hub with KLE University being one of the major medical and educational institutions. RedHeart delivers fresh flowers across Belagavi with same-day and midnight delivery, starting at ₹399.</p>
<p>Camp (the cantonment area) and Tilakwadi are Belagavi's main commercial and residential zones. Khanapur Road leads toward the Western Ghats. The bilingual character of the city means that both Marathi festivals (Gudi Padwa) and Kannada festivals (Ugadi, Karnataka Rajyotsava) drive flower demand. RedHeart stocks flowers for both traditions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Belagavi, Karnataka</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Camp, Tilakwadi, Khanapur Road, Shastri Nagar, Udyambag, Gokak Road, KLE campus area</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Belagavi?", answer: "Yes, RedHeart delivers same-day to Camp, Tilakwadi, Khanapur Road, and all major Belagavi areas." },
      { question: "Does RedHeart deliver for both Gudi Padwa and Ugadi in Belagavi?", answer: "Yes! Belagavi's mixed Marathi-Kannada population celebrates both festivals. RedHeart delivers fresh marigolds and flower arrangements for both Gudi Padwa and Ugadi." },
      { question: "Is midnight delivery available in Belagavi?", answer: "Yes, midnight delivery is available across Belagavi." }
    ]
  },
  "shivamogga": {
    cityName: "Shivamogga",
    metaTitle: "Flower Delivery in Shivamogga | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Shivamogga with same-day delivery. Roses, marigolds & bouquets to Nehru Nagar, Vinoba Nagar, Kuvempu Nagar & all areas. From ₹399.",
    h1: "Flower Delivery in Shivamogga",
    metaKeyword: "flower delivery in Shivamogga, online flower delivery Shivamogga Shimoga, same day flower delivery Shivamogga, florist Shivamogga Karnataka",
    footerContent: `<h2>Flower Delivery in Shivamogga — Gateway to the Western Ghats and Malnad</h2>
<p>Shivamogga (officially renamed from Shimoga in 2014) is the gateway city to the Malnad region — the hilly, forest-rich zone of central Karnataka where the Western Ghats begin to rise and where India's most spectacular waterfalls (Jog Falls, the second largest plunge waterfall in India) are found. The city itself sits on the Tunga river and serves as the commercial hub for a large agricultural hinterland that produces areca nut, paddy, and sugarcane. Kuvempu (K.V. Puttappa), the great Kannada poet and novelist who was awarded the Jnanpith Award and given the title "Rashtra Kavi" (National Poet), was from the Malnad village of Hirekodige near Shivamogga — making the city a centre of Kannada literary pride. RedHeart delivers fresh flowers across Shivamogga with same-day and midnight delivery, starting at ₹399.</p>
<p>Nehru Nagar and Vinoba Nagar are Shivamogga's established residential zones. Kuvempu Nagar (named for the poet) is a newer area. The Tunga river ghats host Ugadi and other festival celebrations with flower offerings. Shivamogga's distance from Bengaluru (270 km) means online flower delivery fills an important gap in the city's gifting market.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shivamogga, Karnataka</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nehru Nagar, Vinoba Nagar, Kuvempu Nagar, Shivappa Nayaka Circle, Sagar Road, Bhadravathi Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Shivamogga?", answer: "Yes, RedHeart delivers same-day to Nehru Nagar, Vinoba Nagar, Kuvempu Nagar, and all major Shivamogga areas." },
      { question: "Does RedHeart deliver flowers for Ugadi in Shivamogga?", answer: "Yes! RedHeart delivers marigolds, roses, and seasonal flowers for Ugadi and all Kannada festivals in Shivamogga." },
      { question: "Is midnight delivery available in Shivamogga?", answer: "Yes, midnight delivery is available across Shivamogga." }
    ]
  },
  "tumakuru": {
    cityName: "Tumakuru",
    metaTitle: "Flower Delivery in Tumakuru | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Tumakuru with same-day delivery. Roses, marigolds & bouquets to Siddaganga, B.H. Road, Doddapete & all areas. From ₹399.",
    h1: "Flower Delivery in Tumakuru",
    metaKeyword: "flower delivery in Tumakuru, online flower delivery Tumakuru Tumkur, same day flower delivery Tumakuru, florist Tumakuru Karnataka",
    footerContent: `<h2>Flower Delivery in Tumakuru — The Coconut City Between Bengaluru and the Deccan</h2>
<p>Tumakuru (historically Tumkur) is Karnataka's most important city between Bengaluru and Davangere — sitting at the meeting point of the Deccan plateau and the Malnad transition zone. The city is nicknamed the "Coconut City" because Tumakuru district grows more coconuts than any other district in Karnataka, and the coconut trading yards of the city handle millions of coconuts annually. The Siddaganga Math — the historic Veerashaiva monastery founded in the 16th century on a rocky outcrop overlooking the city — was led for decades by H.H. Shivakumara Swami, who fed and educated thousands of orphans and poor students and was awarded the Bharat Ratna in 2019. The math's free meals (prasada) are legendary. RedHeart delivers fresh flowers across Tumakuru with same-day and midnight delivery, starting at ₹399.</p>
<p>B.H. Road (Bangalore-Honavar Highway) is Tumakuru's commercial spine. Doddapete is the old market area. The growing IT and manufacturing corridor along the NH48 (Bengaluru-Mumbai highway) is bringing new residential development to the city's outskirts, expanding Tumakuru's gifting economy.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tumakuru, Karnataka</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">B.H. Road, Doddapete, Siddaganga area, Amruth Mahal Layout, Tiptur Road, Kunigal Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Tumakuru?", answer: "Yes, RedHeart delivers same-day across Tumakuru including B.H. Road, Doddapete, Siddaganga area, and all major zones." },
      { question: "Does RedHeart deliver Siddaganga Math puja flowers in Tumakuru?", answer: "Yes! RedHeart delivers marigolds, lotus, and bilva for Siddaganga Math and all temples across Tumakuru." },
      { question: "Is midnight delivery available in Tumakuru?", answer: "Yes, midnight delivery is available across Tumakuru." }
    ]
  },
  "udupi": {
    cityName: "Udupi",
    metaTitle: "Flower Delivery in Udupi | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Udupi with same-day delivery. Roses, marigolds & bouquets to KMC, Manipal, Kunjibettu & all areas. From ₹399.",
    h1: "Flower Delivery in Udupi",
    metaKeyword: "flower delivery in Udupi, online flower delivery Udupi, same day flower delivery Udupi, florist Udupi Karnataka",
    footerContent: `<h2>Flower Delivery in Udupi — The Cuisine Capital and Krishna Temple Town</h2>
<p>Udupi is a small city with an enormous footprint in Indian culture — it gave the world Udupi cuisine (idli, dosa, sambar, coconut chutney — the South Indian vegetarian tradition that fed urban India through thousands of "Udupi hotels" and restaurants spread across every major Indian city). The Udupi Sri Krishna Matha, established by the philosopher-saint Madhvacharya in the 13th century, is one of the most sacred Vaishnava temples in Karnataka. The Krishna idol at the temple is worshipped through a window (called the Kanakana Kindi) in honour of the devotee Kanakadasa who was denied entry but to whom the deity reportedly revealed himself through a crack in the wall. Manipal, adjacent to Udupi, houses Manipal University — one of India's most prestigious private universities with a large international student population. RedHeart delivers fresh flowers across Udupi with same-day and midnight delivery, starting at ₹399.</p>
<p>Manipal is the academic hub. KMC Hospital (Kasturba Medical College) and the university campuses generate steady flower demand for academic occasions. Kunjibettu and the areas near the Krishna Matha are spiritual delivery zones. The Paryaya festival (the biennial transfer of temple administration between eight mutts) is Udupi's biggest flower occasion.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Udupi, Karnataka</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Manipal, KMC area, Kunjibettu, Ajjarkad, Brahmagiri, Perdoor Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Udupi and Manipal?", answer: "Yes, RedHeart delivers same-day to Manipal campus, KMC hospital area, Kunjibettu, and all Udupi areas." },
      { question: "Can I order Krishna Matha puja flowers in Udupi?", answer: "Yes! RedHeart delivers marigolds, lotus, and tulsi for the Sri Krishna Matha and all temples in Udupi." },
      { question: "Is midnight delivery available in Udupi?", answer: "Yes, midnight delivery is available across Udupi and Manipal." }
    ]
  },
  "davangere": {
    cityName: "Davangere",
    metaTitle: "Flower Delivery in Davangere | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Davangere with same-day delivery. Roses, marigolds & bouquets to PJ Extension, 5th Main, Hadadi Road & all areas. From ₹399.",
    h1: "Flower Delivery in Davangere",
    metaKeyword: "flower delivery in Davangere, online flower delivery Davangere, same day flower delivery Davangere, florist Davangere Karnataka",
    footerContent: `<h2>Flower Delivery in Davangere — The Cotton City of Karnataka</h2>
<p>Davangere sits at the heart of Karnataka's cotton belt — the rich black soil of the region produces excellent cotton, and the city's textile mills and cotton trading houses have been the economic backbone of the district for over a century. The city is also famous for the Davangere Benne Dosa — the butter-soaked dosa served in the city's countless hotels is different from the Udupi dosa tradition and has its own passionate following. Davangere is a significant educational centre in northern Karnataka, home to numerous engineering and medical colleges. The city's location halfway between Bengaluru and Hubli makes it a natural trading junction on NH48. RedHeart delivers fresh flowers across Davangere with same-day and midnight delivery, starting at ₹399.</p>
<p>PJ Extension (P.J. Nagar Extension) and the 5th Main area are Davangere's modern residential quarters. Hadadi Road and Shimoga Road are the main commercial corridors. Ugadi, Karnataka Rajyotsava (November 1), and personal milestones like graduations are the main flower demand occasions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Davangere, Karnataka</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">PJ Extension, 5th Main, Hadadi Road, Shimoga Road, Nittuvalli, Avaragere Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Davangere?", answer: "Yes, RedHeart delivers same-day to PJ Extension, 5th Main, Hadadi Road, and all major Davangere areas." },
      { question: "Does RedHeart deliver Karnataka Rajyotsava flowers in Davangere?", answer: "Yes! RedHeart delivers golden shower (Cassia fistula) flowers and Kannada flag-coloured arrangements for Karnataka Rajyotsava on November 1." },
      { question: "Is midnight delivery available in Davangere?", answer: "Yes, midnight delivery is available across Davangere." }
    ]
  },
  "rohtak": {
    cityName: "Rohtak",
    metaTitle: "Flower Delivery in Rohtak | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Rohtak with same-day delivery. Roses, marigolds & bouquets to Delhi Road, Model Town, PGIMS area & all areas. From ₹399.",
    h1: "Flower Delivery in Rohtak",
    metaKeyword: "flower delivery in Rohtak, online flower delivery Rohtak, same day flower delivery Rohtak, florist Rohtak Haryana",
    footerContent: `<h2>Flower Delivery in Rohtak — The Heart of Haryana</h2>
<p>Rohtak is Haryana's most important city after Faridabad and Gurugram — the political and cultural heart of Jat Haryana, located just 70 km west of Delhi on the Delhi-Bathinda highway. The city is home to Maharshi Dayanand University (MDU), one of Haryana's flagship universities, and the Post Graduate Institute of Medical Sciences (PGIMS) — one of North India's most important government medical institutions. Rohtak's wrestlers are among the most decorated in India's Olympic contingents — the city produces world-class wrestlers from its akhadas (wrestling training grounds) who have won Olympic and Commonwealth Games medals. The Tilyar Lake and Wildlife Sanctuary just outside Rohtak provides the city with a welcome patch of natural beauty. RedHeart delivers fresh flowers across Rohtak with same-day and midnight delivery, starting at ₹399.</p>
<p>Delhi Road is Rohtak's main commercial artery. Model Town is the established residential area. The PGIMS campus generates consistent demand for patient flowers and medical occasion gifting. Haryanvi wedding traditions are elaborate — flower decorations for baraat and mandap are significant occasions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rohtak, Haryana</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delhi Road, Model Town, PGIMS area, Civil Lines, Shastri Colony, Subhash Nagar</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Rohtak?", answer: "Yes, RedHeart delivers same-day to Delhi Road, Model Town, PGIMS area, Civil Lines, and all major Rohtak areas." },
      { question: "Does RedHeart deliver to PGIMS Rohtak for patient visits?", answer: "Yes! RedHeart delivers flower bouquets to PGIMS Rohtak for patient rooms and visiting occasions." },
      { question: "Is midnight delivery available in Rohtak?", answer: "Yes, midnight delivery is available across Rohtak." }
    ]
  },
  "panipat": {
    cityName: "Panipat",
    metaTitle: "Flower Delivery in Panipat | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Panipat with same-day delivery. Roses, marigolds & bouquets to Model Town, Sector 11-12, Chandni Chowk & all areas. From ₹399.",
    h1: "Flower Delivery in Panipat",
    metaKeyword: "flower delivery in Panipat, online flower delivery Panipat, same day flower delivery Panipat, florist Panipat Haryana",
    footerContent: `<h2>Flower Delivery in Panipat — The City of Weaving and Three Battles That Shaped India</h2>
<p>Panipat is one of the most historically significant cities in India — three decisive battles fought here (in 1526, 1556, and 1761) fundamentally changed the course of Indian history. The First Battle of Panipat (1526) established Mughal rule in India when Babur defeated Ibrahim Lodi. The Second Battle (1556) consolidated Akbar's empire. The Third Battle (1761) between the Marathas and Ahmad Shah Durrani ended Maratha dreams of pan-Indian hegemony. The city's Kala Amb memorial and Ibrahim Lodi's tomb preserve these historical memories. Today, Panipat is known as India's "City of Weavers" — its power loom industry produces an enormous volume of towels, blankets, and recycled textiles. The Panipat Refinery (IOC) and its growing industrial base make it an important economic centre. RedHeart delivers fresh flowers across Panipat with same-day and midnight delivery, starting at ₹399.</p>
<p>Model Town and Sectors 11-12 are established residential zones. Chandni Chowk and GT Road are commercial areas. The city's weaving families have strong traditions of celebrating marriages, Diwali, and Eid with elaborate flower arrangements.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Panipat, Haryana</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Model Town, Sector 11-12, Chandni Chowk, GT Road, Babyal, Sanoli Road, Refinery Township</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Panipat?", answer: "Yes, RedHeart delivers same-day to Model Town, Sectors 11-12, GT Road, and all major Panipat areas." },
      { question: "Does RedHeart deliver to the Refinery Township in Panipat?", answer: "Yes! RedHeart delivers to the IOC Refinery Township and all residential areas across Panipat." },
      { question: "Is midnight delivery available in Panipat?", answer: "Yes, midnight delivery is available across Panipat." }
    ]
  },
  "karnal": {
    cityName: "Karnal",
    metaTitle: "Flower Delivery in Karnal | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Karnal with same-day delivery. Roses, marigolds & bouquets to Sector 6, 7, 12, Model Town & all areas. From ₹399.",
    h1: "Flower Delivery in Karnal",
    metaKeyword: "flower delivery in Karnal, online flower delivery Karnal, same day flower delivery Karnal, florist Karnal Haryana",
    footerContent: `<h2>Flower Delivery in Karnal — Haryana's Agrarian City by the Yamuna</h2>
<p>Karnal is Haryana's rice bowl — the city and its surrounding district produce high-quality Basmati rice exported across the world, earning it the title of "Rice Bowl of India." The National Dairy Research Institute (NDRI) at Karnal is one of India's most important dairy research centres and the institution where the technology for producing India's first cloned animal (buffalo) was developed. Karnal is associated with Karna of the Mahabharata — the epic character who was born on the banks of the Karna Lake (now Karna Lake in the city centre) in legend. The city's position on the NH44 (the Jammu-Kochi highway, the longest in India) has made it a significant transportation and logistics hub. RedHeart delivers fresh flowers across Karnal with same-day and midnight delivery, starting at ₹399.</p>
<p>Sectors 6, 7, and 12 are Karnal's planned residential areas. Model Town is an upscale residential zone. The growing IT and light manufacturing sector along the NH44 corridor brings a professional workforce with modern gifting expectations.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karnal, Haryana</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sector 6, 7, 12, Model Town, NDRI area, Karna Lake area, Madhuban, Ansal Township</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Karnal?", answer: "Yes, RedHeart delivers same-day to Sectors 6, 7, 12, Model Town, NDRI area, and all Karnal areas." },
      { question: "Does RedHeart deliver to NDRI campus in Karnal?", answer: "Yes! RedHeart delivers to NDRI campus and all major residential and institutional areas across Karnal." },
      { question: "Is midnight delivery available in Karnal?", answer: "Yes, midnight delivery is available across Karnal." }
    ]
  },
  "sonipat": {
    cityName: "Sonipat",
    metaTitle: "Flower Delivery in Sonipat | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Sonipat with same-day delivery. Roses, marigolds & bouquets to Murthal, Model Town, Rajiv Colony & all areas. From ₹399.",
    h1: "Flower Delivery in Sonipat",
    metaKeyword: "flower delivery in Sonipat, online flower delivery Sonipat, same day flower delivery Sonipat, florist Sonipat Haryana",
    footerContent: `<h2>Flower Delivery in Sonipat — Haryana's Industrial Gateway to Delhi</h2>
<p>Sonipat is the city that guards Delhi's northern approach — just 45 km from Connaught Place, it has become a major industrial satellite of the capital. The city's IMT Kundli Industrial Area and the Kundli-Manesar-Palwal (KMP) Expressway connection make it a critical logistics and manufacturing hub. Sonipat produces cycles, textiles, and machine parts, and it is home to O.P. Jindal Global University — one of India's finest private universities that has attracted students and faculty from across the world. The Murthal dhabas (roadside restaurants on NH44) — especially for their parathas — are famous across Delhi-NCR as one of North India's most beloved roadside food stops. RedHeart delivers fresh flowers across Sonipat with same-day and midnight delivery, starting at ₹399.</p>
<p>Murthal, Model Town, and Rajiv Colony are Sonipat's residential areas. The Sector 14 and Sector 23 areas house newer residential developments. The large Jain and Punjabi communities in Sonipat drive wedding and Diwali flower demand significantly.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sonipat, Haryana</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Murthal, Model Town, Rajiv Colony, Sector 14, Sector 23, O.P. Jindal University area, Kundli</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Sonipat?", answer: "Yes, RedHeart delivers same-day to Murthal, Model Town, Rajiv Colony, Sectors 14 and 23, and all Sonipat areas." },
      { question: "Does RedHeart deliver to O.P. Jindal Global University in Sonipat?", answer: "Yes! RedHeart delivers to the Jindal University campus and all residential areas in and around Sonipat." },
      { question: "Is midnight delivery available in Sonipat?", answer: "Yes, midnight delivery is available across Sonipat." }
    ]
  },
  "yamunanagar": {
    cityName: "Yamunanagar",
    metaTitle: "Flower Delivery in Yamunanagar | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Yamunanagar with same-day delivery. Roses, marigolds & bouquets to Model Town, Jagadhri, Damla Road & all areas. From ₹399.",
    h1: "Flower Delivery in Yamunanagar",
    metaKeyword: "flower delivery in Yamunanagar, online flower delivery Yamunanagar, same day flower delivery Yamunanagar, florist Yamunanagar Haryana",
    footerContent: `<h2>Flower Delivery in Yamunanagar — The Industrial City on the Yamuna's Upper Reaches</h2>
<p>Yamunanagar sits where the Yamuna river emerges from the Shivalik Hills onto the plains — it is the closest city to where the Yamuna begins its long journey to Allahabad and beyond. The city is a major industrial centre — plywood and particle board manufacturing, sugar mills, and paper production are the main industries. Jagadhri, the twin-city (now part of Yamunanagar), is famous for its brass and copper utensils — the Jagadhri brassware is sold across North India and is considered among the best quality in the country. The Kalesar National Park in the Shivaliks northeast of Yamunanagar is one of Haryana's most important wildlife areas. RedHeart delivers fresh flowers across Yamunanagar with same-day and midnight delivery, starting at ₹399.</p>
<p>Model Town and the Jagadhri areas are the main commercial and residential zones. Damla Road and the areas along NH344 (toward Ambala) serve the city's industrial population. Baisakhi and Lohri — the Punjabi harvest festivals — are Yamunanagar's biggest flower occasions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Yamunanagar, Haryana</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Model Town, Jagadhri, Damla Road, Radaur Road, Bilaspur Road, BHEL area</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Yamunanagar?", answer: "Yes, RedHeart delivers same-day to Model Town, Jagadhri, Damla Road, and all Yamunanagar areas." },
      { question: "Does RedHeart deliver to Jagadhri area in Yamunanagar?", answer: "Yes! Jagadhri is fully covered. RedHeart delivers to Jagadhri and the entire Yamunanagar urban area." },
      { question: "Is midnight delivery available in Yamunanagar?", answer: "Yes, midnight delivery is available across Yamunanagar." }
    ]
  },
  "ambala": {
    cityName: "Ambala",
    metaTitle: "Flower Delivery in Ambala | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Ambala with same-day delivery. Roses, marigolds & bouquets to Ambala Cantt, Ambala City, Geeta Colony & all areas. From ₹399.",
    h1: "Flower Delivery in Ambala",
    metaKeyword: "flower delivery in Ambala, online flower delivery Ambala, same day flower delivery Ambala, florist Ambala Haryana",
    footerContent: `<h2>Flower Delivery in Ambala — Where Haryana and Punjab Meet at the Grand Trunk Road</h2>
<p>Ambala is one of India's most strategically located cities — sitting at the junction of the Grand Trunk Road (NH44) and the national highway to Shimla (NH5), it is the city where the routes to Punjab, Delhi, and the Himalayas diverge. The Ambala Cantonment (Ambala Cantt) is one of India's largest and most important military stations — the Indian Air Force's Western Air Command has a significant presence here, and the Ambala Air Force Station is where Rafale jets are based. Ambala City (adjacent to Cantt) is the older, civilian settlement with its own commercial character. The city is also known as the "City of Bicycles" — cycle manufacturing and trading here has produced many of India's largest cycle brands. RedHeart delivers fresh flowers across Ambala with same-day and midnight delivery, starting at ₹399.</p>
<p>Ambala Cantt and Ambala City are essentially two cities in one. Geeta Colony and the areas near the Air Force Station serve the military population. Lohri and Baisakhi flower traditions are strong here, as is the general Punjabi-Haryanvi gifting culture for weddings and festivals.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ambala, Haryana</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ambala Cantt, Ambala City, Geeta Colony, Baldev Nagar, Nicholson Road, Air Force Station area</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in both Ambala Cantt and Ambala City?", answer: "Yes, RedHeart delivers same-day to both Ambala Cantt and Ambala City, including Air Force Station areas, Geeta Colony, and all major zones." },
      { question: "Does RedHeart deliver to Air Force personnel in Ambala?", answer: "Yes! RedHeart delivers to all residential addresses within the Ambala Cantt and Air Force Station residential zones." },
      { question: "Is midnight delivery available in Ambala?", answer: "Yes, midnight delivery is available across Ambala Cantt and Ambala City." }
    ]
  },
  "panchkula": {
    cityName: "Panchkula",
    metaTitle: "Flower Delivery in Panchkula | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Panchkula with same-day delivery. Roses, bouquets to Sector 5, 8, 9, 15, Mansa Devi Complex & all Panchkula areas. From ₹399.",
    h1: "Flower Delivery in Panchkula",
    metaKeyword: "flower delivery in Panchkula, online flower delivery Panchkula, same day flower delivery Panchkula, florist Panchkula Haryana",
    footerContent: `<h2>Flower Delivery in Panchkula — Haryana's Planned City in Chandigarh's Shadow</h2>
<p>Panchkula is Haryana's planned satellite city — built as a Chandigarh-side counterpart in the 1970s, it shares the Chandigarh Metropolitan Area with the union territory capital and Mohali (Punjab) on the other side. The city is planned on a sector grid like Chandigarh, with wide roads and defined residential, commercial, and industrial zones. Panchkula is home to the Mansa Devi temple on the Shivalik Hill overlooking the city — one of the most visited Shakti shrines in the Chandigarh region — and the Pinjore Gardens (Yadavindra Gardens), a magnificent Mughal-style terraced garden with flowing water channels. The Morni Hills (Haryana's only hill station) are accessible from Panchkula for weekenders. RedHeart delivers fresh flowers across Panchkula with same-day and midnight delivery, starting at ₹399.</p>
<p>Sectors 5, 8, 9, 15, and 20 are Panchkula's main residential areas. The Mansa Devi Complex area is a major pilgrimage and residential zone. Government employees, IT professionals from the Chandigarh Tech Park area, and Panchkula's settled middle-class families form the main flower delivery demographic.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Panchkula, Haryana</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sector 5, 8, 9, 15, 20, 25, Mansa Devi Complex, Pinjore, Kalka</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Panchkula sectors?", answer: "Yes, RedHeart delivers same-day to all Panchkula sectors including Sector 5, 8, 9, 15, 20, 25, and the Mansa Devi Complex area." },
      { question: "Can I order Mansa Devi temple flowers in Panchkula?", answer: "Yes! RedHeart delivers marigolds, roses, and flowers for Mansa Devi puja across Panchkula." },
      { question: "Is midnight delivery available in Panchkula?", answer: "Yes, midnight delivery is available across Panchkula." }
    ]
  },
  "bathinda": {
    cityName: "Bathinda",
    metaTitle: "Flower Delivery in Bathinda | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Bathinda with same-day delivery. Roses, gladioli & bouquets to Civil Lines, Urban Estate, Ajit Road & all areas. From ₹399.",
    h1: "Flower Delivery in Bathinda",
    metaKeyword: "flower delivery in Bathinda, online flower delivery Bathinda, same day flower delivery Bathinda, florist Bathinda Punjab",
    footerContent: `<h2>Flower Delivery in Bathinda — The Thermal Power City of Punjab's Cotton Belt</h2>
<p>Bathinda is Punjab's largest city in the Malwa region — the cotton belt of Punjab south of the Sutlej. The city is dominated economically by two industries: the Guru Nanak Dev Thermal Plant (one of Punjab's largest power generators) and the HPCL Guru Gobind Singh Refinery, which processes crude oil into petrol, diesel, and LPG for the region. The historic Qila Mubarak ("Blessed Fort") in the old city is one of the oldest surviving forts in North India, its roots going back to the pre-Mughal period. The fort is associated with Razia Sultana — the first and only female Sultan of Delhi — who was briefly imprisoned here after her defeat. Bathinda is also the centre of a farming community navigating the post-Green Revolution challenges of soil salinity and water table depletion. RedHeart delivers fresh flowers across Bathinda with same-day and midnight delivery, starting at ₹399.</p>
<p>Civil Lines and Urban Estate are Bathinda's planned residential areas. Ajit Road connects to the Thermal Plant area. The strong Sikh community in Bathinda ensures major Gurpurab celebrations with marigold garlands and flower arrangements.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bathinda, Punjab</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Urban Estate, Ajit Road, Goniana Road, Phul Road, Thermal Plant Colony</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Bathinda?", answer: "Yes, RedHeart delivers same-day to Civil Lines, Urban Estate, Ajit Road, and all major Bathinda areas." },
      { question: "Does RedHeart deliver Gurpurab and Lohri flowers in Bathinda?", answer: "Yes! RedHeart delivers marigolds, gladioli, and festive arrangements for Gurpurab, Lohri, and Baisakhi in Bathinda." },
      { question: "Is midnight delivery available in Bathinda?", answer: "Yes, midnight delivery is available across Bathinda." }
    ]
  },
  "sangli": {
    cityName: "Sangli",
    metaTitle: "Flower Delivery in Sangli | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Sangli with same-day delivery. Roses, tuberose & bouquets to Vishrambag, Miraj, Gandhi Chowk & all areas. From ₹399.",
    h1: "Flower Delivery in Sangli",
    metaKeyword: "flower delivery in Sangli, online flower delivery Sangli, same day flower delivery Sangli, florist Sangli Maharashtra",
    footerContent: `<h2>Flower Delivery in Sangli — The Turmeric City and Ganesh Festival Heartland</h2>
<p>Sangli is Maharashtra's commercial capital of southern Vidarbha — known above all as one of India's most important turmeric trading centres, the Sangli turmeric market being among Asia's largest. The city is built on the Krishna river and has historically been the princely state of Sangli, whose maharajas were patrons of Hindustani classical music — the Kirana gharana (Bhimsen Joshi's musical lineage) has deep roots here. Sangli is also known for its intense Ganesh Chaturthi celebrations, which rival those of Pune in their devotion if not in their scale. The Ganapati processions and tableaux in Sangli attract visitors from across Maharashtra. RedHeart delivers fresh flowers across Sangli with same-day and midnight delivery, starting at ₹399.</p>
<p>Vishrambag is Sangli's main residential area. Miraj (adjacent city, famous for its tabla and sitar manufacturing) forms the other half of the Sangli-Miraj-Kupwad urban agglomeration. Gandhi Chowk is the commercial centre. Ganesh Chaturthi in Sangli means enormous demand for marigolds, tuberose, and red hibiscus for 10 days.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sangli, Maharashtra</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vishrambag, Miraj, Gandhi Chowk, Kupwad, Sangligunj, Sangli Miraj Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Sangli?", answer: "Yes, RedHeart delivers same-day to Vishrambag, Miraj, Gandhi Chowk, Kupwad, and all Sangli areas." },
      { question: "Does RedHeart deliver Ganesh Chaturthi flowers in Sangli?", answer: "Yes! RedHeart delivers marigolds, tuberose, and hibiscus for Ganesh Chaturthi puja and decoration across Sangli." },
      { question: "Is midnight delivery available in Sangli?", answer: "Yes, midnight delivery is available across Sangli and Miraj." }
    ]
  },
  "dhanbad": {
    cityName: "Dhanbad",
    metaTitle: "Flower Delivery in Dhanbad | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Dhanbad with same-day delivery. Roses, marigolds & bouquets to Hirapur, Katras, Bank More & all Dhanbad areas. From ₹399.",
    h1: "Flower Delivery in Dhanbad",
    metaKeyword: "flower delivery in Dhanbad, online flower delivery Dhanbad, same day flower delivery Dhanbad, florist Dhanbad Jharkhand",
    footerContent: `<h2>Flower Delivery in Dhanbad — The Coal Capital of India</h2>
<p>Dhanbad is India's coal capital — the Jharia coalfield, which underlies Dhanbad district, is the largest and most important coking coal field in India, supplying the coking coal that feeds the country's steel industry. The Bharat Coking Coal Limited (BCCL) headquarters is in Dhanbad, and the city has grown entirely around the coal mining economy. The Indian School of Mines (now IIT-ISM Dhanbad) is one of India's premier technical institutions and is consistently ranked among the top engineering colleges — it has produced generations of mining engineers, petroleum engineers, and geologists who went on to shape India's resource sectors. Dhanbad's coal mines and the surrounding industrial landscape make it visually dramatic, if not conventionally beautiful. RedHeart delivers fresh flowers across Dhanbad with same-day and midnight delivery, starting at ₹399.</p>
<p>Hirapur and Bank More are Dhanbad's main commercial and residential zones. Katras (a mining town within the urban area) and Jharia are significant residential areas. The largely middle-class mining and government employee population of Dhanbad celebrates Durga Puja, Chhath, and Diwali enthusiastically with significant flower demand.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dhanbad, Jharkhand</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hirapur, Bank More, Katras, Jharia, IIT-ISM campus, Saraidhela, Sindri</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Dhanbad?", answer: "Yes, RedHeart delivers same-day to Hirapur, Bank More, Katras, IIT-ISM campus area, and all major Dhanbad zones." },
      { question: "Does RedHeart deliver Chhath Puja flowers in Dhanbad?", answer: "Yes! RedHeart delivers marigolds, lotus, and tuberose for Chhath Puja celebrations in Dhanbad." },
      { question: "Is midnight delivery available in Dhanbad?", answer: "Yes, midnight delivery is available across Dhanbad." }
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
  console.log("\nDone — batch 14 complete.");
}
run().catch((err) => { console.error(err); process.exit(1); });
