/**
 * Fire-and-forget ISR revalidation on the Next.js frontend.
 * Called after admin edits so changes appear instantly instead of
 * waiting for the 6-hour cache window.
 *
 * Requires REVALIDATE_SECRET in .env (must match the Vercel env var).
 */
const FRONTEND_URL = process.env.FRONTEND_URL || "https://www.redheart.in";

export function revalidateTags(tags) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) { console.error("revalidateTags: REVALIDATE_SECRET is not set, so the storefront will not be refreshed"); return; }
  if (!tags?.length) return;

  for (const tag of tags) {
    fetch(`${FRONTEND_URL}/api/revalidate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-revalidate-secret": secret,
      },
      body: JSON.stringify({ tag }),
    })
      .then(async (res) => {
        if (res.ok) return;
        // A non-2xx answer means the page was NOT refreshed. 429 usually means Vercel's firewall /
        // Security Checkpoint challenged the request; 401 means the secret does not match Vercel's.
        const hint = res.status === 429 ? " (blocked by Vercel firewall / Security Checkpoint: add a Bypass rule for /api/revalidate)"
          : res.status === 401 ? " (REVALIDATE_SECRET does not match the one set on Vercel)" : "";
        console.error(`revalidate ${tag} FAILED: HTTP ${res.status}${hint}`);
      })
      .catch((err) => console.error(`revalidate ${tag} failed:`, err.message));
  }
}
