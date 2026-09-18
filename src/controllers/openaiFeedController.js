import { buildOpenAIProductFeed } from "../utils/openaiProductFeed.js";

/**
 * GET /openai-product-feed.jsonl
 * Public — the "Hosted URL" feed source for OpenAI Commerce
 * (https://developers.openai.com/commerce/specs/file-upload/products).
 * OpenAI re-fetches this URL on its own schedule, so price/stock/catalog
 * changes reach it automatically with no manual re-upload.
 */
export const openaiProductFeed = async (req, res) => {
  try {
    const { jsonl } = await buildOpenAIProductFeed();
    res.setHeader("Content-Type", "application/jsonl; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600"); // cache 1 hour
    return res.send(jsonl);
  } catch (err) {
    console.error("openaiProductFeed error:", err);
    return res.status(500).send("");
  }
};
