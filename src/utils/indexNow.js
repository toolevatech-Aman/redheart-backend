import axios from "axios";

// Pushes changed URLs to Bing/Yandex the moment content updates, instead of
// waiting for the next crawl. Key file lives at the site root on the
// frontend (public/<key>.txt) — must match INDEXNOW_KEY exactly.
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const HOST = "www.redheart.in";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

// Fire-and-forget — a failed push should never block the actual content
// save that triggered it.
export async function submitToIndexNow(urls) {
  const urlList = (Array.isArray(urls) ? urls : [urls]).filter(Boolean);
  if (!INDEXNOW_KEY || !urlList.length) return;

  try {
    await axios.post(
      "https://api.indexnow.org/IndexNow",
      { host: HOST, key: INDEXNOW_KEY, keyLocation: KEY_LOCATION, urlList },
      { headers: { "Content-Type": "application/json; charset=utf-8" }, timeout: 10000 }
    );
  } catch (err) {
    console.error("IndexNow submit failed:", err.message);
  }
}
