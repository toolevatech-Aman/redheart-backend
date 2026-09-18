import { getCachedOpenAIProductFeed } from "../utils/openaiProductFeed.js";

/**
 * GET /openai-product-feed.jsonl
 * Public — the "Hosted URL" feed source for OpenAI Commerce
 * (https://developers.openai.com/commerce/specs/file-upload/products).
 * Served from an in-memory cache (refreshed hourly — see server.js) rather
 * than querying the full catalog on every request, since a cold build
 * (5-8s against ~300 products) was slow enough to trip the connector's own
 * fetch timeout.
 */
export const openaiProductFeed = async (req, res) => {
  try {
    const { jsonl } = await getCachedOpenAIProductFeed();
    res.setHeader("Content-Type", "application/jsonl; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600");
    return res.send(jsonl);
  } catch (err) {
    console.error("openaiProductFeed error:", err);
    return res.status(500).send("");
  }
};
