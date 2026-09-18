// Shared helpers for turning a source blog-source/*.md file into a BlogPost
// document — used by scripts/import-blog-source.mjs (one-time seed) and
// kept here (rather than inline in the script) in case a future batch of
// source content needs the same conversion.
import { marked } from "marked";
import slugify from "slugify";

// ─── Markdown → HTML ────────────────────────────────────────────────────────
// Matches the site's existing blog HTML convention (see the one real post
// already live): body sections as <h2>/<p>, and a trailing FAQ block written
// as alternating <h2><strong>Question</strong></h2><h3>Answer</h3> pairs —
// NOT a separate "FAQ" heading, the questions just continue as H2s. Source
// files write that block under a literal "## Quick Answers" heading with
// **Bold question** / plain-text-answer pairs; that heading is dropped and
// each pair converted to match the live convention.
export function markdownToBlogHtml(markdown) {
  // Drop the leading H1 — the page template renders its own H1 from
  // BlogPost.title separately, so leaving this in would duplicate it.
  const lines = markdown.split("\n").filter((l, i, arr) => {
    if (i === 0 && /^#\s+/.test(l.trim())) return false;
    // also skip the blank line immediately after a removed H1
    if (i === 1 && /^#\s+/.test(arr[0]?.trim() || "") && l.trim() === "") return false;
    return true;
  });
  const qaIndex = lines.findIndex((l) => /^##\s+Quick Answers\s*$/i.test(l.trim()));

  const bodyMd = qaIndex === -1 ? lines.join("\n") : lines.slice(0, qaIndex).join("\n");
  const qaMd = qaIndex === -1 ? "" : lines.slice(qaIndex + 1).join("\n");

  let html = marked.parse(bodyMd.trim(), { headerIds: false, mangle: false });

  if (qaMd.trim()) {
    // Pairs look like: **Question text?**\nAnswer text (one or more lines
    // until the next blank-line-separated block).
    const blocks = qaMd
      .split(/\n\s*\n/)
      .map((b) => b.trim())
      .filter(Boolean);
    const faqHtml = blocks
      .map((block) => {
        const m = block.match(/^\*\*(.+?)\*\*\s*\n?([\s\S]*)$/);
        if (!m) return "";
        const question = m[1].trim();
        const answer = m[2].trim();
        return `<h2><strong>${question}</strong></h2>\n<h3>${answer}</h3>`;
      })
      .filter(Boolean)
      .join("\n");
    html += `\n${faqHtml}`;
  }

  return html.trim();
}

// First real paragraph of the source markdown, trimmed to a card-friendly
// excerpt length — used for both `excerpt` and, truncated further, as a
// metaDescription fallback when nothing more specific is warranted.
export function extractExcerpt(markdown, maxLen = 160) {
  const paragraph = markdown
    .split("\n")
    .find((l) => l.trim() && !l.trim().startsWith("#"));
  if (!paragraph) return "";
  const clean = paragraph.replace(/\*\*/g, "").trim();
  return clean.length > maxLen ? clean.slice(0, maxLen - 1).replace(/\s+\S*$/, "") + "…" : clean;
}

export function extractTitle(markdown) {
  const h1 = markdown.split("\n").find((l) => /^#\s+/.test(l.trim()));
  return h1 ? h1.replace(/^#\s+/, "").trim() : "";
}

export function makeSlug(title, fallback) {
  return slugify(title || fallback, { lower: true, strict: true });
}

// ─── Classification ─────────────────────────────────────────────────────────
const OCCASIONS = [
  "birthday", "anniversary", "diwali", "valentines-day", "valentines",
  "mothers-day", "fathers-day", "rakhi", "christmas", "holi", "lohri",
  "wedding", "engagement-proposal", "engagement", "graduation",
  "baby-shower", "new-years-eve", "navratri-dussehra", "karva-chauth",
  "bhai-dooj", "onam-pongal", "friendship-day", "retirement", "farewell",
  "new-job-promotion", "congratulations", "get-well-soon", "apology",
  "cheer-up", "first-date", "rose-day", "housewarming", "pregnancy-announcement",
  "baby-naming-ceremony", "exam-success", "school-college-reunion",
];
const RELATIONSHIPS = [
  "wife", "husband", "girlfriend", "boyfriend", "sister", "a-friend",
  "new-colleague", "mother", "father", "parents", "kids", "him", "her",
  "self-gifting",
];

const KEYWORD_SUBCATS = [
  { slug: "etiquette-corporate", label: "Etiquette & Corporate Gifting", pattern: /etiquette|corporate|bulk/ },
  { slug: "care-maintenance", label: "Care & Maintenance", pattern: /care-|-care|tips|fresh|revive|repotting/ },
  { slug: "logistics-pricing", label: "Delivery & Pricing", pattern: /delivery|price|pricing|sizes?-explained|packaging/ },
  { slug: "trust-education", label: "Facts, History & Myths", pattern: /history|myth|fact|psychology|allergie?s/ },
];

export function classifySubcategory(filename, isCityGuide) {
  if (isCityGuide) return { slug: "city-guides", label: "City Guides" };
  if (/-vs-/.test(filename)) return { slug: "comparisons", label: "Comparisons" };
  for (const k of KEYWORD_SUBCATS) {
    if (k.pattern.test(filename)) return { slug: k.slug, label: k.label };
  }
  if (OCCASIONS.some((o) => filename.includes(o))) return { slug: "occasion-guides", label: "Occasion Guides" };
  if (RELATIONSHIPS.some((r) => filename.includes(`-${r}`) || filename.includes(`for-${r}`))) {
    return { slug: "recipient-guides", label: "Recipient Guides" };
  }
  return { slug: "variety-deep-dives", label: "Variety Deep-Dives" };
}

const OCCASION_LABELS = {
  "valentines-day": "Valentine's Day", valentines: "Valentine's Day",
  "mothers-day": "Mother's Day", "fathers-day": "Father's Day",
  "new-years-eve": "New Year", "engagement-proposal": "Engagement", engagement: "Engagement",
  "get-well-soon": "Get Well Soon", "new-job-promotion": "New Job / Promotion",
  "navratri-dussehra": "Navratri & Dussehra", "karva-chauth": "Karva Chauth",
  "bhai-dooj": "Bhai Dooj", "onam-pongal": "Onam & Pongal", "baby-shower": "Baby Shower",
  "pregnancy-announcement": "Pregnancy Announcement", "baby-naming-ceremony": "Baby Naming Ceremony",
  "exam-success": "Exam Success", "school-college-reunion": "Reunion",
};
const RELATIONSHIP_LABELS = {
  "a-friend": "Friend", "new-colleague": "Colleague", him: "Him", her: "Her",
  "self-gifting": "Self", kids: "Kids", parents: "Parents",
};
const titleCase = (s) => s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export function extractOccasionTag(filename) {
  const found = OCCASIONS.find((o) => filename.includes(o));
  return found ? OCCASION_LABELS[found] || titleCase(found) : null;
}
export function extractRelationshipTag(filename) {
  const found = RELATIONSHIPS.find((r) => filename.includes(`-${r}`) || filename.includes(`for-${r}`));
  return found ? RELATIONSHIP_LABELS[found] || titleCase(found) : null;
}

// City-guide filenames start "<n>-<cityslug>-...". citySlug may itself be
// hyphenated (e.g. "long-distance"... no — city names here are things like
// "long-distance" never occurs; but multi-word cities like "navi-mumbai" do)
// — matched against a known list rather than guessed positionally.
const KNOWN_CITY_SLUGS = [
  "navi-mumbai", "new-delhi", "greater-noida",
  "mumbai", "delhi", "bangalore", "bengaluru", "hyderabad", "chennai", "kolkata",
  "pune", "ahmedabad", "jaipur", "lucknow", "chandigarh", "noida", "gurgaon",
  "gurugram", "surat", "kanpur", "nagpur", "indore", "thane", "bhopal",
  "visakhapatnam", "patna", "vadodara", "ghaziabad", "ludhiana", "agra",
  "nashik", "faridabad", "meerut", "rajkot", "varanasi", "srinagar",
  "amritsar", "allahabad", "prayagraj", "coimbatore", "jabalpur", "gwalior",
  "vijayawada", "jodhpur", "madurai", "raipur", "kota", "guwahati",
  "chandigarh", "mysore", "mysuru", "bhubaneswar", "dehradun", "kochi",
  "cochin", "shimla", "goa", "panaji", "lonavala", "udaipur", "pondicherry",
  "ranchi", "thiruvananthapuram", "trivandrum", "mangalore",
];

export function extractCitySlug(filename) {
  return KNOWN_CITY_SLUGS.find((c) => filename.includes(c)) || null;
}
