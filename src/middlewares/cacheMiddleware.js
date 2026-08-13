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

/**
 * Evicts cached GET responses so a write is reflected immediately instead
 * of waiting out the TTL. Pass an exact `req.originalUrl` (e.g.
 * "/api/city/page/Cakes/mumbai") to remove one entry, or a prefix (e.g.
 * "/api/city/") to sweep every cached URL under it — useful for listing
 * endpoints (all-slugs, public/:category) whose key includes params we
 * don't always know at the call site.
 */
export const invalidateCache = (...keysOrPrefixes) => {
  for (const target of keysOrPrefixes) {
    if (!target) continue;
    if (store.has(target)) {
      store.delete(target);
      continue;
    }
    for (const key of store.keys()) {
      if (key.startsWith(target)) store.delete(key);
    }
  }
};
