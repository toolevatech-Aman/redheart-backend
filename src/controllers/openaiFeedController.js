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
    // "application/jsonl" isn't a registered IANA media type — a strict
    // validator could plausibly reject the connection over an unrecognized
    // Content-Type. application/x-ndjson is the conventional type for
    // newline-delimited JSON and far more likely to be recognized.
    res.setHeader("Content-Type", "application/x-ndjson; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600");
    return res.send(jsonl);
  } catch (err) {
    console.error("openaiProductFeed error:", err);
    return res.status(500).send("");
  }
};
