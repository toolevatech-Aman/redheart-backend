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
  if (!secret || !tags?.length) return;

  for (const tag of tags) {
    fetch(`${FRONTEND_URL}/api/revalidate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-revalidate-secret": secret,
      },
      body: JSON.stringify({ tag }),
    }).catch((err) => console.error(`revalidate ${tag} failed:`, err.message));
  }
}
