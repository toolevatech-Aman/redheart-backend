import Theme from "../models/Theme.js";
import { invalidateCache } from "../middlewares/cacheMiddleware.js";
import {
  validateTheme, buildScale, buildThemeCss, pickLiveTheme, themeStatus, contrastWithWhite, cleanAnnouncement,
} from "../utils/themeCss.js";

const bust = () => invalidateCache("/api/themes");

// Public — what the website's /theme.css route asks for. Never throws: on any
// problem the site simply shows its normal colours.
export const getActiveTheme = async (req, res) => {
  try {
    const enabled = await Theme.find({ isEnabled: true }).lean();
    const live = pickLiveTheme(enabled);
    res.json({ css: buildThemeCss(live), name: live?.name || null });
  } catch (err) {
    console.error("getActiveTheme error:", err.message);
    res.json({ css: "", name: null });
  }
};

const present = (t) => ({
  ...t,
  status: themeStatus(t),
  contrast: contrastWithWhite(t.primary),
  scale: buildScale(t.primary),
});

export const listThemes = async (req, res) => {
  try {
    const rows = await Theme.find({}).sort({ createdAt: -1 }).lean();
    res.json({ success: true, data: rows.map(present) });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const pick = (b) => ({
  name: String(b.name || "").trim(),
  primary: String(b.primary || "").toLowerCase(),
  announcement: {
    text: cleanAnnouncement(b.announcement?.text),
    bg: String(b.announcement?.bg || "#111111").toLowerCase(),
    color: String(b.announcement?.color || "#ffffff").toLowerCase(),
  },
  style: String(b.style || "").toLowerCase(),
  startsAt: b.startsAt || null,
  endsAt: b.endsAt || null,
  isEnabled: !!b.isEnabled,
});

export const createTheme = async (req, res) => {
  try {
    const data = pick(req.body);
    const errors = validateTheme(data);
    if (errors.length) return res.status(400).json({ success: false, message: errors.join(". ") });
    const row = await Theme.create(data);
    bust();
    res.status(201).json({ success: true, data: present(row.toObject()) });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateTheme = async (req, res) => {
  try {
    const data = pick(req.body);
    const errors = validateTheme(data);
    if (errors.length) return res.status(400).json({ success: false, message: errors.join(". ") });
    const row = await Theme.findByIdAndUpdate(req.params.id, { $set: data }, { new: true }).lean();
    if (!row) return res.status(404).json({ success: false, message: "Theme not found" });
    bust();
    res.json({ success: true, data: present(row) });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteTheme = async (req, res) => {
  try {
    const out = await Theme.deleteOne({ _id: req.params.id });
    bust();
    res.json({ success: true, deleted: out.deletedCount });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Live preview in the admin form: palette + contrast for a colour being picked.
export const previewTheme = async (req, res) => {
  const primary = String(req.body.primary || "").toLowerCase();
  if (!/^#[0-9a-f]{6}$/.test(primary)) return res.status(400).json({ success: false, message: "Not a hex colour" });
  res.json({ success: true, scale: buildScale(primary), contrast: contrastWithWhite(primary) });
};
