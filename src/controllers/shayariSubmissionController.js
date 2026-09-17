import ShayariSubmission from "../models/ShayariSubmission.js";
import { revalidateTags } from "../utils/revalidate.js";
import { runDailyContentDrop } from "../utils/dailyContentDrop.js";

// GET /api/shayari-submissions — admin: list all submissions
export const getAllSubmissions = async (req, res) => {
  try {
    const submissions = await ShayariSubmission.find({}).sort({ submittedAt: -1 }).lean();
    res.json({ success: true, data: submissions.map((s) => ({ ...s, id: s._id })) });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/shayari-submissions/published — public: approved submissions for a
// given category/type, so live shayari/quote pages can merge them in.
export const getPublishedSubmissions = async (req, res) => {
  try {
    const { type, category } = req.query;
    const filter = { status: "approved" };
    if (type) filter.type = type;
    if (category) filter.category = category;

    const submissions = await ShayariSubmission.find(filter)
      .select("shayari category type name submittedAt")
      .sort({ submittedAt: -1 })
      .lean();
    res.json({ success: true, data: submissions });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// POST /api/shayari-submissions — public: submit a shayari/quote for review
export const createSubmission = async (req, res) => {
  try {
    const { shayari, category, name, phone, type } = req.body;
    if (!shayari?.trim()) {
      return res.status(400).json({ success: false, message: "shayari is required" });
    }
    const submission = await ShayariSubmission.create({
      shayari: shayari.trim(),
      category: category || "",
      name: name || "",
      phone: phone || "",
      type: type === "quote" ? "quote" : "shayari",
    });
    res.status(201).json({ success: true, data: submission });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// PATCH /api/shayari-submissions/:id — admin: approve/reject
export const updateSubmissionStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!["pending", "approved", "rejected"].includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status" });
    }
    const submission = await ShayariSubmission.findByIdAndUpdate(id, { status }, { new: true });
    if (!submission) return res.status(404).json({ success: false, message: "Not found" });

    // Approving/unapproving changes what the live page should show — refresh it now
    // instead of waiting for the page's normal revalidate window.
    revalidateTags([`shayari-submissions-${submission.category}`]);

    res.json({ success: true, data: submission });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// POST /api/shayari-submissions/run-daily-drop — manual trigger for the
// daily AI content drop (runs automatically every 24h — see server.js), so
// it can be tested/re-run on demand instead of waiting for the schedule.
export const runContentDropNow = async (req, res) => {
  const secret = req.headers["x-content-drop-secret"] || req.body?.secret;
  if (!process.env.CONTENT_DROP_SECRET || secret !== process.env.CONTENT_DROP_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const result = await runDailyContentDrop();
    return res.status(200).json({ ok: true, ...result });
  } catch (err) {
    console.error("runContentDropNow error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};
