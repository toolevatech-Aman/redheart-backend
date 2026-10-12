// Pure helpers for the occasion-theme engine: validation, the colour scale
// derived from ONE chosen colour, and the stylesheet text. No DB access, so
// it can be tested on its own. The stylesheet is built only from validated
// values (hex colours, a length-capped escaped string) — the admin never
// supplies raw CSS.

const HEX = /^#[0-9a-fA-F]{6}$/;
const STEPS_LIGHT = { 50: 0.95, 100: 0.88, 200: 0.75, 300: 0.55, 400: 0.35, 500: 0.15 }; // mix toward white
const STEPS_DARK  = { 700: 0.15, 800: 0.32, 900: 0.48 };                                   // mix toward black

export const isHex = (v) => typeof v === "string" && HEX.test(v);

const toRgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const mix = (rgb, target, t) => rgb.map((c) => Math.round(c + (target - c) * t));
const fmt = (rgb) => rgb.join(" ");

// WCAG relative luminance / contrast ratio (white text on the colour).
const lin = (c) => { const s = c / 255; return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4; };
const luminance = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
export function contrastWithWhite(hex) {
  return Math.round((1.05 / (luminance(toRgb(hex)) + 0.05)) * 100) / 100;
}

// Scale 50..900 from the main colour (which is step 600 exactly).
export function buildScale(primaryHex) {
  const base = toRgb(primaryHex);
  const scale = {};
  for (const [step, t] of Object.entries(STEPS_LIGHT)) scale[step] = fmt(mix(base, 255, t));
  scale[600] = fmt(base);
  for (const [step, t] of Object.entries(STEPS_DARK)) scale[step] = fmt(mix(base, 0, t));
  return scale;
}

// One-line text for the announcement bar, safe to place inside a CSS string.
export function cleanAnnouncement(text) {
  return String(text || "").replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, 120);
}
const cssString = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

// Festive effects the storefront knows how to draw. Keep in sync with
// storefront public/theme-fx/<name>.css and components/ThemeFx.jsx.
export const THEME_STYLES = ["durga", "holi"];

export function validateTheme(input) {
  const errors = [];
  const name = String(input.name || "").trim();
  if (!name) errors.push("Name is required");
  if (!isHex(input.primary)) errors.push("Main colour must be a hex colour like #0f766e");
  else if (contrastWithWhite(input.primary) < 3) errors.push("Main colour is too light — white text on buttons would be unreadable. Pick a darker colour.");
  const ann = input.announcement || {};
  if (ann.text) {
    if (!isHex(ann.bg || "")) errors.push("Announcement bar colour must be a hex colour");
    if (!isHex(ann.color || "")) errors.push("Announcement text colour must be a hex colour");
  }
  if (input.style && !THEME_STYLES.includes(input.style)) errors.push("Unknown festive effect");
  const startsAt = input.startsAt ? new Date(input.startsAt) : null;
  const endsAt = input.endsAt ? new Date(input.endsAt) : null;
  if (startsAt && isNaN(startsAt)) errors.push("Start date is invalid");
  if (endsAt && isNaN(endsAt)) errors.push("End date is invalid");
  if (startsAt && endsAt && endsAt <= startsAt) errors.push("End date must be after the start date");
  return errors;
}

// Stylesheet for the live theme. `html:root` outranks the defaults declared
// on `:root` in the site CSS regardless of which file loads first.
export function buildThemeCss(theme) {
  if (!theme) return "";
  const s = buildScale(theme.primary);
  const vars = [];
  for (const step of [50, 100, 200, 300, 400, 500, 600]) vars.push(`--brand-${step}:${s[step]}`);
  for (const step of [700, 800, 900]) vars.push(`--rose-${step}:${s[step]}`);
  for (const step of [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]) vars.push(`--brandred-${step}:${s[step]}`);
  if (THEME_STYLES.includes(theme.style)) vars.push(`--theme-fx:${theme.style}`);
  let css = `html:root{${vars.join(";")}}`;
  const text = cleanAnnouncement(theme.announcement?.text);
  if (text && isHex(theme.announcement?.bg || "") && isHex(theme.announcement?.color || "")) {
    css += `body::before{content:"${cssString(text)}";display:block;text-align:center;font:600 13px/1.4 system-ui,sans-serif;padding:8px 12px;background:${theme.announcement.bg};color:${theme.announcement.color}}`;
  }
  return css;
}

// Live = switched on AND inside its date window (open-ended if a date is blank).
export function isLiveNow(theme, now = new Date()) {
  if (!theme?.isEnabled) return false;
  if (theme.startsAt && new Date(theme.startsAt) > now) return false;
  if (theme.endsAt && new Date(theme.endsAt) <= now) return false;
  return true;
}

// If several are live, the most recently started wins (then most recently saved).
export function pickLiveTheme(themes, now = new Date()) {
  return themes
    .filter((t) => isLiveNow(t, now))
    .sort((a, b) => (new Date(b.startsAt || 0) - new Date(a.startsAt || 0)) || (new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0)))[0] || null;
}

export function themeStatus(theme, now = new Date()) {
  if (!theme.isEnabled) return "off";
  if (theme.startsAt && new Date(theme.startsAt) > now) return "scheduled";
  if (theme.endsAt && new Date(theme.endsAt) <= now) return "ended";
  return "live";
}
