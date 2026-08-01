import axios from "axios";
import IndexNowCursor from "../models/IndexNowCursor.js";
import { submitToIndexNow } from "./indexNow.js";

const SITEMAP_URL = "https://www.redheart.in/sitemap.xml";
const BATCH_SIZE = 100;

async function fetchSitemapUrls() {
  const { data } = await axios.get(SITEMAP_URL, { timeout: 20000 });
  const matches = data.match(/<loc>(.*?)<\/loc>/g) || [];
  return matches.map((m) => m.replace(/<\/?loc>/g, "").trim());
}

// Rotates through the full sitemap in fixed-size daily batches so every URL
// gets periodically re-pushed to Bing within its daily IndexNow quota.
export async function runDailyIndexNowSubmit() {
  const urls = await fetchSitemapUrls();
  if (!urls.length) return { submitted: 0 };

  let cursor = await IndexNowCursor.findOne();
  if (!cursor) cursor = await IndexNowCursor.create({ position: 0 });

  const start = cursor.position % urls.length;
  const batch = [];
  for (let i = 0; i < Math.min(BATCH_SIZE, urls.length); i++) {
    batch.push(urls[(start + i) % urls.length]);
  }

  await submitToIndexNow(batch);

  cursor.position = (start + batch.length) % urls.length;
  cursor.lastRunAt = new Date();
  cursor.lastBatchCount = batch.length;
  await cursor.save();

  return { submitted: batch.length, nextPosition: cursor.position, totalUrls: urls.length };
}
