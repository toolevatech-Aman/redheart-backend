// Tiny in-memory GET response cache for hot, read-only public endpoints
// (city/category/product pages). The EC2 box is small — most of its load is
// Googlebot + Next.js ISR regeneration re-fetching content that barely
// changes within a few minutes, so caching these responses in memory avoids
// hitting MongoDB on every request. Bounded FIFO eviction keeps memory flat.
const store = new Map(); // key -> { body, status, expiresAt }
const MAX_ENTRIES = 3000;

export const cacheResponse = (ttlSeconds = 300) => (req, res, next) => {
  const key = req.originalUrl;
  const hit = store.get(key);
  if (hit && hit.expiresAt > Date.now()) {
    res.set("X-Cache", "HIT");
    return res.status(hit.status).json(hit.body);
  }
  if (hit) store.delete(key); // expired

  const originalJson = res.json.bind(res);
  res.json = (body) => {
    if (res.statusCode >= 200 && res.statusCode < 300) {
      if (store.size >= MAX_ENTRIES) {
        store.delete(store.keys().next().value); // evict oldest
      }
      store.set(key, { body, status: res.statusCode, expiresAt: Date.now() + ttlSeconds * 1000 });
    }
    res.set("X-Cache", "MISS");
    return originalJson(body);
  };
  next();
};
