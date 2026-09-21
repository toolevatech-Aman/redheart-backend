// Triggers Next.js's on-demand ISR revalidation on the frontend so a newly
// published blog post shows up on /blog and /blog/[category] immediately,
// instead of waiting out their 30-minute revalidate window. Fire-and-forget
// by design — a revalidation hiccup should never fail the actual publish.
const FRONTEND_URL = process.env.FRONTEND_URL || "https://www.redheart.in";

export async function revalidateBlogListing() {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) return; // not configured — skip silently, same as the cache-invalidate calls around it
  try {
    await fetch(`${FRONTEND_URL}/api/revalidate`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-revalidate-secret": secret },
      body: JSON.stringify({ tag: "blog-posts" }),
    });
  } catch (err) {
    console.error("revalidateBlogListing failed:", err.message);
  }
}
