// Tiny in-memory per-IP rate limiter for abuse-prone endpoints — no new
// dependency, matches the hand-rolled style of cacheMiddleware.js. Not a
// substitute for edge-level protection (Vercel Firewall/Bot Protection),
// just a floor so a single client can't hammer payment-adjacent routes
// (coupon enumeration, spamming Razorpay order creation) even if it slips
// past the edge. Single EC2/pm2 process, so in-memory state is fine — this
// isn't meant to survive a restart or work across multiple instances.
const buckets = new Map(); // key -> { count, resetAt }
const MAX_KEYS = 5000;

function clientKey(req) {
  // Trust X-Forwarded-For's first hop (Vercel/ALB in front) with a fallback.
  const fwd = req.headers["x-forwarded-for"];
  const ip = (fwd ? fwd.split(",")[0].trim() : null) || req.ip || req.socket?.remoteAddress || "unknown";
  return `${req.baseUrl}${req.path}:${ip}`;
}

export const rateLimit = ({ windowMs = 60_000, max = 10, message = "Too many requests, please try again shortly." } = {}) =>
  (req, res, next) => {
    const key = clientKey(req);
    const now = Date.now();
    let bucket = buckets.get(key);

    if (!bucket || bucket.resetAt <= now) {
      if (buckets.size >= MAX_KEYS) buckets.delete(buckets.keys().next().value); // bounded FIFO eviction
      bucket = { count: 0, resetAt: now + windowMs };
      buckets.set(key, bucket);
    }

    bucket.count += 1;
    if (bucket.count > max) {
      res.set("Retry-After", String(Math.ceil((bucket.resetAt - now) / 1000)));
      return res.status(429).json({ error: message });
    }
    next();
  };
