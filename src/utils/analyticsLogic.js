// Pure helpers behind the admin analytics: date ranges (presets + custom),
// state/city normalising, and the city / state / user tables. Kept free of
// database calls so they can be unit-tested (tests/analyticsLogic.test.mjs).

const IST = "+05:30";
const PRESET_DAYS = { "7d": 7, "30d": 30, "90d": 90 };
const DAY_RE = /^\d{4}-\d{2}-\d{2}$/;

const validDay = (s) => DAY_RE.test(String(s || "")) && !Number.isNaN(new Date(`${s}T00:00:00${IST}`).getTime());

/**
 * Turn the query (?range=7d|30d|90d|all|custom&from=YYYY-MM-DD&to=YYYY-MM-DD)
 * into { range, from, to, label }. `from`/`to` are Dates (or null = open ended).
 * Custom days are Indian calendar days: from 00:00 IST to 23:59:59.999 IST.
 * A bad or missing custom range falls back to the last 30 days, and a
 * reversed range is swapped, so the dashboard never errors on odd input.
 */
export function resolveRange(query = {}, now = new Date()) {
  const r = query.range;
  if (r === "custom") {
    let { from, to } = query;
    if (validDay(from) && validDay(to)) {
      if (from > to) [from, to] = [to, from];
      return {
        range: "custom",
        from: new Date(`${from}T00:00:00${IST}`),
        to: new Date(`${to}T23:59:59.999${IST}`),
        label: `${from} to ${to}`,
        fromDay: from,
        toDay: to,
      };
    }
  }
  if (r === "all") return { range: "all", from: null, to: null, label: "All time" };
  const key = PRESET_DAYS[r] ? r : "30d";
  const d = new Date(now);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - (PRESET_DAYS[key] - 1));
  return { range: key, from: d, to: null, label: `Last ${PRESET_DAYS[key]} days` };
}

export const inRange = (date, { from, to }) => {
  const t = new Date(date).getTime();
  if (Number.isNaN(t)) return false;
  if (from && t < from.getTime()) return false;
  if (to && t > to.getTime()) return false;
  return true;
};

// ── names ──────────────────────────────────────────────────────────────────
const CANONICAL_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman & Nicobar Islands", "Chandigarh",
  "Dadra & Nagar Haveli and Daman & Diu", "Delhi", "Jammu & Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
];
// letters only, "&" read as "and": "Tamil Nadu" / "Tamilnadu" / "tamil-nadu" all become "tamilnadu"
const letters = (s) => String(s || "").toLowerCase().replace(/&/g, "and").replace(/[^a-z]/g, "");
const CANONICAL_BY_KEY = new Map(CANONICAL_STATES.map((n) => [letters(n), n]));
const STATE_ALIASES = Object.fromEntries(Object.entries({
  newdelhi: "Delhi", nctofdelhi: "Delhi", delhincr: "Delhi", nct: "Delhi",
  orissa: "Odisha", uttaranchal: "Uttarakhand", pondicherry: "Puducherry", jk: "Jammu & Kashmir",
  kashmir: "Jammu & Kashmir", mp: "Madhya Pradesh", up: "Uttar Pradesh", hp: "Himachal Pradesh", uk: "Uttarakhand", tn: "Tamil Nadu",
  ap: "Andhra Pradesh", wb: "West Bengal", cg: "Chhattisgarh", andamanandnicobar: "Andaman & Nicobar Islands",
  damananddiu: "Dadra & Nagar Haveli and Daman & Diu", dadraandnagarhaveli: "Dadra & Nagar Haveli and Daman & Diu",
}));

function editDistance(a, b) {
  const prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    let diag = prev[0];
    prev[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = prev[j];
      prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, diag + (a[i - 1] === b[j - 1] ? 0 : 1));
      diag = tmp;
    }
  }
  return prev[b.length];
}

/** Closest real state when someone typed it slightly wrong ("Himacha Pradesh"); null if nothing is close. */
function fuzzyState(key) {
  if (key.length < 5) return null;
  const max = key.length >= 9 ? 2 : 1;
  let best = null, bestD = max + 1, tie = false;
  for (const [k, name] of CANONICAL_BY_KEY) {
    const d = editDistance(key, k);
    if (d < bestD) { best = name; bestD = d; tie = false; } else if (d === bestD) tie = true;
  }
  return best && !tie ? best : null;
}

const titleCase = (s) => s.toLowerCase().replace(/(^|[\s(-])([a-z])/g, (_, a, b) => a + b.toUpperCase());
const clean = (s) => String(s || "").replace(/\s+/g, " ").trim();

export const cityKey = (city) => clean(city).toLowerCase() || "unknown";
export const cityLabel = (city) => (clean(city) ? titleCase(clean(city)) : "Unknown");

/** Proper state name; "" when blank. Fixes spacing, spelling, short forms (MP, UP) and old names (Orissa). */
export function normalizeState(state, known) {
  const s = clean(state);
  if (!s) return "";
  const key = letters(s);
  if (!key) return "";
  return STATE_ALIASES[key] || CANONICAL_BY_KEY.get(key) || fuzzyState(key) || known?.get(s.toLowerCase()) || titleCase(s);
}

export const isRealState = (name) => CANONICAL_BY_KEY.has(letters(name));

/**
 * Pick a location for one order / address: the state written on it if it is a
 * real state, otherwise the state of that city (cityToState = Map(cityKey -> state)),
 * otherwise "Unknown" -- junk typed into the state box ("Frf") never becomes its own row.
 */
export function locate({ city, state }, cityToState, knownStates) {
  const base = { city: cityLabel(city), cityKey: cityKey(city) };
  const direct = normalizeState(state, knownStates);
  if (isRealState(direct)) return { ...base, state: direct };
  const viaCity = normalizeState(cityToState?.get(cityKey(city)), knownStates);
  return { ...base, state: isRealState(viaCity) ? viaCity : "Unknown" };
}

// ── customer type ──────────────────────────────────────────────────────────
/** "repeat" = 2+ paid orders, "new" = exactly 1, "none" = never ordered. */
export const customerType = (paidOrderCount) => (paidOrderCount >= 2 ? "repeat" : paidOrderCount === 1 ? "new" : "none");

/**
 * For the orders on one admin page: which order number is each one for its
 * customer. `paidByUser` = Map(userId -> [{ orderId, createdAt }]) (paid orders
 * only). Returns Map(orderId -> { orderSeq, customerType }) where the order
 * counts itself even if it is still unpaid (staff-created, awaiting payment).
 */
export function orderCustomerTags(orders, paidByUser) {
  const out = new Map();
  for (const o of orders) {
    const paid = paidByUser.get(o.userId) || [];
    const t = new Date(o.createdAt).getTime();
    const before = paid.filter((p) => p.orderId !== o.orderId && new Date(p.createdAt).getTime() < t).length;
    const orderSeq = before + 1;
    out.set(o.orderId, { orderSeq, customerType: orderSeq === 1 ? "new" : "repeat" });
  }
  return out;
}

// ── location tables ────────────────────────────────────────────────────────
const blank = () => ({ orders: 0, revenue: 0, buyers: new Set(), newBuyers: new Set(), returningBuyers: new Set(), newOrders: 0, repeatOrders: 0, signups: 0 });

function finish(map, labelKey) {
  return [...map.entries()]
    .map(([k, v]) => ({
      ...v.meta,
      [labelKey]: v.meta[labelKey],
      orders: v.orders,
      revenue: v.revenue,
      aov: v.orders ? v.revenue / v.orders : 0,
      buyers: v.buyers.size,
      newBuyers: v.newBuyers.size,
      returningBuyers: v.returningBuyers.size,
      newOrders: v.newOrders,
      repeatOrders: v.repeatOrders,
      signups: v.signups,
    }))
    .sort((a, b) => b.orders - a.orders || b.revenue - a.revenue || b.signups - a.signups);
}

/**
 * orders: in-range paid orders with { userId, totalPrice, _seq, shippingAddress:{city,state} }
 *   (_seq = this order's number for its customer: 1 = first ever)
 * signups: in-range users, each { city, state } from their saved address ("" when none)
 * firstOrderInRange: Set(userId) whose first-ever order is inside the range
 * Returns { byCity, byState } rows sorted by orders. A city is keyed by city
 * name AND state, so two towns with the same name in different states stay apart.
 */
export function buildLocationTables({ orders, signups = [], firstOrderInRange = new Set(), cityToState: baseCityToState, knownStates }) {
  // A city whose state we only know from the orders themselves (no city page for it)
  // still gets placed when a saved address omits the state.
  const cityToState = new Map(baseCityToState || []);
  for (const o of orders) {
    const a = o.shippingAddress || {};
    const st = normalizeState(a.state, knownStates);
    if (isRealState(st) && clean(a.city) && !cityToState.has(cityKey(a.city))) cityToState.set(cityKey(a.city), st);
  }
  const cities = new Map();
  const states = new Map();
  const bump = (map, key, meta) => {
    if (!map.has(key)) map.set(key, { ...blank(), meta });
    return map.get(key);
  };

  for (const o of orders) {
    const loc = locate(o.shippingAddress || {}, cityToState, knownStates);
    const c = bump(cities, `${loc.cityKey}|${loc.state}`, { city: loc.city, state: loc.state });
    const s = bump(states, loc.state, { state: loc.state });
    for (const b of [c, s]) {
      b.orders += 1;
      b.revenue += o.totalPrice || 0;
      b.buyers.add(o.userId);
      if (o._seq === 1) b.newOrders += 1; else b.repeatOrders += 1;
      (firstOrderInRange.has(o.userId) ? b.newBuyers : b.returningBuyers).add(o.userId);
    }
  }

  for (const u of signups) {
    if (!clean(u.city) && !clean(u.state)) continue; // no saved address: can't place them
    const loc = locate(u, cityToState, knownStates);
    if (clean(u.city)) bump(cities, `${loc.cityKey}|${loc.state}`, { city: loc.city, state: loc.state }).signups += 1;
    bump(states, loc.state, { state: loc.state }).signups += 1;
  }

  return { byCity: finish(cities, "city"), byState: finish(states, "state") };
}
