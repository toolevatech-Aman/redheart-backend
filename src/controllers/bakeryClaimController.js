import BakeryClaim from "../models/BakeryClaim.js";

const PLANS = ["", "free", "basic", "pro"];
const ROLES = ["owner", "manager", "staff", "other"];

// POST /api/bakery-claims — public: a bakery owner claims a listing
export const createClaim = async (req, res) => {
  try {
    const b = req.body || {};
    if (b.website) return res.status(201).json({ success: true }); // honeypot: bots fill this, pretend success

    const ownerName = String(b.ownerName || "").trim().slice(0, 100);
    const phone = String(b.phone || "").replace(/[^\d+]/g, "").replace(/^(\+?91)(?=\d{10}$)/, "");
    const email = String(b.email || "").trim().slice(0, 120);
    const shopCity = String(b.shopCity || "").trim().slice(0, 60);
    const shopSlug = String(b.shopSlug || "").trim().slice(0, 160);
    if (!ownerName) return res.status(400).json({ success: false, message: "Please enter your name." });
    if (!/^\d{10}$/.test(phone)) return res.status(400).json({ success: false, message: "Please enter a valid 10-digit mobile number." });
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ success: false, message: "Please enter a valid email." });
    if (!shopCity || !shopSlug) return res.status(400).json({ success: false, message: "Missing shop details." });

    const claim = await BakeryClaim.create({
      shopCity, shopSlug,
      shopName: String(b.shopName || "").trim().slice(0, 160),
      ownerName, phone, email,
      role: ROLES.includes(b.role) ? b.role : "owner",
      message: String(b.message || "").trim().slice(0, 1000),
      plan: PLANS.includes(b.plan) ? b.plan : "",
      sourceUrl: String(b.sourceUrl || "").slice(0, 300),
    });
    res.status(201).json({ success: true, data: { id: claim._id } });
  } catch (err) {
    res.status(500).json({ success: false, message: "Something went wrong. Please try again." });
  }
};

// GET /api/bakery-claims — admin: all claims, newest first
export const getAllClaims = async (req, res) => {
  try {
    const claims = await BakeryClaim.find({}).sort({ createdAt: -1 }).limit(2000).lean();
    res.json({ success: true, data: claims.map((c) => ({ ...c, id: c._id })) });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// PATCH /api/bakery-claims/:id — admin: change status and/or notes
export const updateClaim = async (req, res) => {
  try {
    const update = {};
    if (req.body.status !== undefined) {
      if (!["new", "contacted", "verified", "active", "rejected"].includes(req.body.status)) return res.status(400).json({ success: false, message: "Invalid status" });
      update.status = req.body.status;
    }
    if (req.body.notes !== undefined) update.notes = String(req.body.notes).slice(0, 2000);
    const claim = await BakeryClaim.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!claim) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data: claim });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
