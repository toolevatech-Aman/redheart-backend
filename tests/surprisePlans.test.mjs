import * as P from "../src/utils/surprisePlans.js";
let pass = 0, fail = 0;
const ok = (n, c, extra = "") => { c ? pass++ : fail++; console.log((c ? "PASS " : "FAIL ") + n + (c ? "" : "  " + extra)); };

ok("two sold plans priced 99 and 199", P.TIER_PRICES.quarter === 99 && P.TIER_PRICES.year === 199);
ok("legacy prices unchanged", P.TIER_PRICES.free === 99 && P.TIER_PRICES.popular === 179 && P.TIER_PRICES.lifetime === 249);
ok("plan lengths", P.PLAN_MONTHS.quarter === 3 && P.PLAN_MONTHS.year === 12);
ok("upgrade target: quarter -> year, legacy -> lifetime", P.upgradeTarget("quarter") === "year" && P.upgradeTarget("free") === "lifetime" && P.upgradeTarget("popular") === "lifetime");
ok("upgrade price quarter -> year is 100", P.TIER_PRICES[P.upgradeTarget("quarter")] - P.TIER_PRICES.quarter === 100);

const iso = (d) => d.toISOString().slice(0, 10);
ok("3 months from 15 Oct 2026", iso(P.expiryFor("quarter", new Date("2026-10-15T10:00:00Z"))) === "2027-01-15");
ok("1 year from 15 Oct 2026", iso(P.expiryFor("year", new Date("2026-10-15T10:00:00Z"))) === "2027-10-15");
ok("month end clamps (30 Nov + 3 months = 28 Feb)", iso(P.expiryFor("quarter", new Date("2026-11-30T00:00:00Z"))) === "2027-02-28");
ok("leap day + 1 year = 28 Feb", iso(P.expiryFor("year", new Date("2028-02-29T00:00:00Z"))) === "2029-02-28");
ok("legacy plans never expire", P.expiryFor("free", new Date()) === null && P.expiryFor("popular", new Date()) === null && P.expiryFor("lifetime", new Date()) === null);
ok("unknown tier never expires (safe default)", P.expiryFor("nope", new Date()) === null);

const now = new Date("2027-01-16T00:00:00Z");
ok("expired when expiresAt in the past", P.isExpired({ expiresAt: new Date("2027-01-15T00:00:00Z") }, now));
ok("not expired when in the future", !P.isExpired({ expiresAt: new Date("2027-01-17T00:00:00Z") }, now));
ok("no expiresAt = never expires (legacy pages)", !P.isExpired({}, now) && !P.isExpired({ expiresAt: null }, now) && !P.isExpired(null, now));
console.log(`\n${pass} passed, ${fail} failed`); process.exit(fail ? 1 : 0);
