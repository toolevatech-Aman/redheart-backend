import ValentinePage from "../models/ValentinePage.js";

// POST /api/valentine  → create or update a page (upsert by slug)
export const createValentinePage = async (req, res) => {
  try {
    const { slug } = req.body;
    if (!slug) return res.status(400).json({ error: "slug is required" });

    const update = { ...req.body };
    if (update.isPaid && !update.amountPaid) {
      // best-effort default; frontend should send actual amount
      update.amountPaid = update.amountPaid || 0;
    }

    const page = await ValentinePage.findOneAndUpdate(
      { slug },
      { $set: update },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    return res.status(200).json({ ok: true, slug: page.slug, id: page._id });
  } catch (err) {
    console.error("createValentinePage error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// GET /api/valentine/:slug  → fetch a page for the recipient
export const getValentinePage = async (req, res) => {
  try {
    const { slug } = req.params;
    const page = await ValentinePage.findOne({ slug });
    if (!page) return res.status(404).json({ error: "Page not found" });

    // Only return paid pages publicly
    if (!page.isPaid) {
      return res.status(402).json({ error: "Page not active yet" });
    }

    return res.status(200).json(page);
  } catch (err) {
    console.error("getValentinePage error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// POST /api/valentine/:slug/respond  → recipient says yes
export const recordResponse = async (req, res) => {
  try {
    const { slug } = req.params;
    const { address, phone } = req.body || {};

    const page = await ValentinePage.findOneAndUpdate(
      { slug },
      {
        $set: {
          responded:       true,
          respondedAt:     new Date(),
          deliveryAddress: address || "",
          deliveryPhone:   phone   || "",
        },
      },
      { new: true }
    );

    if (!page) return res.status(404).json({ error: "Page not found" });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("recordResponse error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};
