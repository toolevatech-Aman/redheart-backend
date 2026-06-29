import nodemailer from "nodemailer";
import ValentinePage from "../models/ValentinePage.js";

// ─── Email transporter ────────────────────────────────────────────────────────
function getTransporter() {
  if (process.env.GMAIL_USER) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASS },
    });
  }
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  return null;
}

async function sendYesNotification(page) {
  const transporter = getTransporter();
  if (!transporter || !page.email) return;
  try {
    await transporter.sendMail({
      from:    `"RedHeart 💗" <${process.env.GMAIL_USER || process.env.SMTP_USER}>`,
      to:      page.email,
      subject: `${page.partnerName || "She"} said YES! 💗`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:auto;padding:32px;background:#fff7f7;border-radius:16px;">
          <h1 style="color:#c0392b;font-size:28px;margin-bottom:8px;">She said YES! 🎉</h1>
          <p style="color:#555;font-size:16px;margin-bottom:24px;">
            <strong>${page.partnerName || "She"}</strong> just tapped Yes on your surprise page.
            ${page.selectedGift && page.selectedGift !== "none" ? "Your gift order is being processed and will be delivered soon. 🌹" : ""}
          </p>
          <a href="https://redheart.in/valentine-surprise/${page.slug}"
            style="display:inline-block;background:#c0392b;color:#fff;padding:14px 28px;border-radius:50px;text-decoration:none;font-weight:bold;font-size:15px;">
            View your page →
          </a>
          <p style="color:#aaa;font-size:12px;margin-top:24px;">
            This notification is because you created a surprise page on RedHeart.<br/>
            Page views so far: <strong>${page.viewCount || 1}</strong>
          </p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Valentine email error:", err.message);
  }
}

// ─── POST /api/valentine — create or update page ──────────────────────────────
export const createValentinePage = async (req, res) => {
  try {
    const { slug } = req.body;
    if (!slug) return res.status(400).json({ error: "slug is required" });

    const page = await ValentinePage.findOneAndUpdate(
      { slug },
      { $set: req.body },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    return res.status(200).json({ ok: true, slug: page.slug, id: page._id });
  } catch (err) {
    console.error("createValentinePage error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// ─── GET /api/valentine/:slug — fetch page (public, paid-only) ────────────────
export const getValentinePage = async (req, res) => {
  try {
    const { slug } = req.params;
    const page = await ValentinePage.findOne({ slug });
    if (!page) return res.status(404).json({ error: "Page not found" });
    if (!page.isPaid) return res.status(402).json({ error: "Page not active yet" });
    return res.status(200).json(page);
  } catch (err) {
    console.error("getValentinePage error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// ─── PATCH /api/valentine/:slug/view — increment view counter ─────────────────
export const trackView = async (req, res) => {
  try {
    const { slug } = req.params;
    await ValentinePage.updateOne(
      { slug },
      { $inc: { viewCount: 1 }, $set: { lastViewedAt: new Date() } }
    );
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
};

// ─── POST /api/valentine/:slug/respond — recipient says yes ──────────────────
export const recordResponse = async (req, res) => {
  try {
    const { slug } = req.params;
    const { address } = req.body || {};
    const addrObj = typeof address === "object" ? address : {};
    const addrStr = addrObj.line1
      ? `${addrObj.name}, ${addrObj.line1}, ${addrObj.city} - ${addrObj.pincode}`
      : (address || "");

    const page = await ValentinePage.findOneAndUpdate(
      { slug },
      {
        $set: {
          responded:       true,
          respondedAt:     new Date(),
          deliveryAddress: addrStr,
          deliveryPhone:   addrObj.phone || "",
        },
      },
      { new: true }
    );

    if (!page) return res.status(404).json({ error: "Page not found" });

    // Fire-and-forget email to creator
    sendYesNotification(page);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("recordResponse error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};
