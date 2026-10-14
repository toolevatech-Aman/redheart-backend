// Surprise-page plans. Two plans are sold today: ₹99 for 3 months and ₹199 for a year.
// The three older plans stay in the price table only so a page already paid for (or an order
// in flight while this shipped) keeps working. Legacy plans never expire, exactly as before.
export const TIER_PRICES = { quarter: 99, year: 199, free: 99, popular: 179, lifetime: 249 };
export const PLAN_MONTHS = { quarter: 3, year: 12 };

// Plan you can upgrade to from `from` (a 3-month page goes to the year plan; legacy pages
// keep their old Lifetime upgrade).
export const upgradeTarget = (from) => (from === "quarter" ? "year" : "lifetime");

// Calendar months, clamped to the last day of a shorter month (31 Jan + 1 month = 28/29 Feb).
export function addMonths(date, months) {
  const d = new Date(date);
  const day = d.getUTCDate();
  d.setUTCMonth(d.getUTCMonth() + months);
  if (d.getUTCDate() !== day) d.setUTCDate(0);
  return d;
}

// When a page paid for on `paidAt` stops being served. null = never (legacy plans).
export const expiryFor = (tierId, paidAt) => (PLAN_MONTHS[tierId] ? addMonths(paidAt, PLAN_MONTHS[tierId]) : null);

export const isExpired = (page, now = new Date()) => !!page?.expiresAt && new Date(page.expiresAt).getTime() < now.getTime();
