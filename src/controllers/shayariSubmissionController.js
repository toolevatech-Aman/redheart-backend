import ShayariSubmission from "../models/ShayariSubmission.js";
import { revalidateTags } from "../utils/revalidate.js";

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
