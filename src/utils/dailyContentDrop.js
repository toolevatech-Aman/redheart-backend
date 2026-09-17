import ShayariSubmission from "../models/ShayariSubmission.js";
import { revalidateTags } from "./revalidate.js";

// Labels must match SHAYARI_CATEGORIES / QUOTE_CATEGORIES `label` fields in
// redheart-nextjs/lib/quotesData.js exactly — the frontend filters published
// submissions by an exact string match on category label.
const CATEGORIES = [
  // Shayari (Hindi, Devanagari)
  { type: "shayari", label: "Love Shayari",         mood: "romantic love between two people" },
  { type: "shayari", label: "Sad Shayari",           mood: "heartbreak, loss, longing" },
  { type: "shayari", label: "Good Morning Shayari",  mood: "waking up thinking of someone you love" },
  { type: "shayari", label: "Birthday Shayari",      mood: "celebrating someone's birthday" },
  { type: "shayari", label: "Romantic Shayari",      mood: "deep romance and devotion" },
  { type: "shayari", label: "Good Night Shayari",    mood: "saying goodnight to someone you love" },
  { type: "shayari", label: "Attitude Shayari",      mood: "bold self-confidence, not caring what others think" },
  { type: "shayari", label: "Friendship Shayari",    mood: "loyal, lifelong friendship" },
  { type: "shayari", label: "Miss You Shayari",      mood: "missing someone who is far away" },
  { type: "shayari", label: "Two Line Shayari",      mood: "any emotion, but must fit in exactly two short lines" },
  // Quotes (English)
  { type: "quote", label: "Good Morning Quotes",     mood: "waking up thinking of someone you love" },
  { type: "quote", label: "Love Quotes for Her",     mood: "romantic love directed at a woman" },
  { type: "quote", label: "Birthday Quotes",         mood: "celebrating someone's birthday" },
  { type: "quote", label: "Anniversary Quotes",      mood: "celebrating years together as a couple" },
  { type: "quote", label: "Miss You Quotes",         mood: "missing someone who is far away" },
  { type: "quote", label: "Romantic Quotes",         mood: "deep romance and devotion" },
  { type: "quote", label: "Friendship Quotes",       mood: "loyal, lifelong friendship" },
  { type: "quote", label: "Motivational Quotes",     mood: "encouragement to keep going through hard times" },
  { type: "quote", label: "Good Night Quotes",       mood: "saying goodnight to someone you love" },
  { type: "quote", label: "Sad Quotes",              mood: "heartbreak, loss, longing" },
];

const AUTHOR_NAME = "RedHeart Daily ✨";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Retries transient rate-limit/server errors with backoff. This job runs
// once a day in the background with nobody waiting on it, so there's no
// reason to rush — generous spacing (see the caller's delay between
// categories) and backoff here matter far more than total runtime.
async function generateTwoWithRetry(cat, attempt = 1) {
  try {
    return await generateTwo(cat);
  } catch (err) {
    const retryable = /Gemini API (429|500|503)/.test(err.message);
    if (retryable && attempt < 4) {
      await sleep(attempt * 20000);
      return generateTwoWithRetry(cat, attempt + 1);
    }
    throw err;
  }
}

async function generateTwo({ type, label, mood }) {
  const isShayari = type === "shayari";
  const system = isShayari
    ? "You write short, original Hindi shayari (2-4 lines, Devanagari script) for an Indian gifting website. Each piece must be entirely original — never reproduce, adapt, or closely paraphrase any real published poet's actual lines. Output ONLY a JSON array of exactly 2 strings, nothing else — no markdown, no explanation."
    : "You write short, original English quotes (one sentence, occasionally two) for an Indian gifting website. Each quote must be entirely original — never reproduce or closely paraphrase a real, attributable quote. Output ONLY a JSON array of exactly 2 strings, nothing else — no markdown, no explanation.";

  const user = `Write 2 new, original ${isShayari ? "shayari" : "quotes"} for the category "${label}". Mood/theme: ${mood}. They must sound natural, warm, and shareable on WhatsApp status — not cliché or generic. Return as a JSON array of exactly 2 strings.`;

  // Model id is configurable via env since Gemini model names change over
  // time (gemini-2.5-flash was already retired as of this writing) — if
  // this one gets deprecated, update GEMINI_MODEL in .env; no redeploy of
  // this file needed.
  const model = process.env.GEMINI_MODEL || "gemini-3.6-flash";

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents: [{ role: "user", parts: [{ text: user }] }],
        generationConfig: {
          responseMimeType: "application/json",
          maxOutputTokens: 1024,
          // This model reasons by default and its "thinking" tokens count
          // against maxOutputTokens — without disabling it, the budget was
          // burned on internal reasoning before writing any actual output.
          thinkingConfig: { thinkingBudget: 0 },
        },
      }),
    }
  );

  if (!res.ok) {
    throw new Error(`Gemini API ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }

  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
  const match = text.match(/\[[\s\S]*\]/); // tolerate stray whitespace/formatting around the array
  if (!match) throw new Error(`Could not find a JSON array in response: ${text.slice(0, 200)}`);

  const items = JSON.parse(match[0]);
  if (!Array.isArray(items) || items.length === 0) throw new Error("Response was not a non-empty array");
  return items.filter((s) => typeof s === "string" && s.trim()).slice(0, 2);
}

// Adds 2 new AI-written shayari/quotes to every category, daily — inserted
// directly as "approved" so they show up via the same
// /api/shayari-submissions/published path real user submissions use, with
// no admin moderation step (these are RedHeart's own content, not
// user-submitted). Each category's frontend page is then revalidated so the
// new pair appears immediately instead of waiting for the page's normal
// 1-hour cache window.
export async function runDailyContentDrop() {
  if (!process.env.GEMINI_API_KEY) {
    console.error("[content-drop] GEMINI_API_KEY not set — skipped");
    return { added: 0, failed: 0, skipped: true };
  }

  let added = 0;
  let failed = 0;
  const tags = [];

  for (const [i, cat] of CATEGORIES.entries()) {
    if (i > 0) await sleep(8000); // stay under the free tier's per-minute rate limit
    try {
      const items = await generateTwoWithRetry(cat);
      for (const shayari of items) {
        await ShayariSubmission.create({
          shayari,
          category: cat.label,
          name: AUTHOR_NAME,
          type: cat.type,
          status: "approved",
        });
        added++;
      }
      tags.push(`shayari-submissions-${cat.label}`);
    } catch (err) {
      failed++;
      console.error(`[content-drop] "${cat.label}" failed:`, err.message);
    }
  }

  if (tags.length) revalidateTags(tags);

  return { added, failed, categories: CATEGORIES.length };
}
