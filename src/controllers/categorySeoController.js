import CategorySeoPage from "../models/CategorySeoPage.js";

// GET /category-seo/all-slugs — lightweight list for sitemap generation
export const getAllCategorySeoPaths = async (req, res) => {
  try {
    const pages = await CategorySeoPage.find().select("url updatedAt").lean();
    res.json(pages);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET all pages
export const getAllPages = async (req, res) => {
  try {
    const pages = await CategorySeoPage.find().sort({ pageKey: 1 });
    res.json({ success: true, data: pages });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET single page by pageKey (public — used by user frontend)
export const getPageByKey = async (req, res) => {
  try {
    const pageKey = req.params[0]; // captures full path e.g. "flowers/roses"
    const page = await CategorySeoPage.findOne({ pageKey });
    if (!page) return res.json({ success: false, data: null });
    res.json({ success: true, data: page });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// PUT update a page by ID
export const updatePage = async (req, res) => {
  try {
    const { id } = req.params;
    const { h1, metaTitle, metaDescription, canonicalUrl, metaKeyword, footerContent, faqs, breadcrumb, pinnedProducts } = req.body;
    const updated = await CategorySeoPage.findByIdAndUpdate(
      id,
      { h1, metaTitle, metaDescription, canonicalUrl, metaKeyword, footerContent, faqs, breadcrumb, pinnedProducts },
      { new: true }
    );
    if (!updated) return res.status(404).json({ success: false, message: "Page not found" });
    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// POST bulk seed — inserts pages that don't exist yet (skips existing ones)
export const seedPages = async (req, res) => {
  try {
    const { pages } = req.body;
    if (!Array.isArray(pages) || pages.length === 0) {
      return res.status(400).json({ success: false, message: "No pages provided" });
    }

    const ops = pages.map((p) => ({
      updateOne: {
        filter: { pageKey: p.pageKey },
        update: {
          $setOnInsert: {
            pageKey: p.pageKey,
            categorySlug: p.categorySlug,
            subcategorySlug: p.subcategorySlug,
            url: p.url,
            defaultH1: p.defaultH1,
            h1: p.h1,
            metaTitle: p.metaTitle,
            metaDescription: p.metaDescription,
            canonicalUrl: p.canonicalUrl,
            footerContent: p.footerContent,
          },
          $set: {
            metaKeyword: p.metaKeyword,
            faqs: p.faqs,
            breadcrumb: p.breadcrumb,
          },
        },
        upsert: true,
      },
    }));

    const result = await CategorySeoPage.bulkWrite(ops);
    const total = await CategorySeoPage.countDocuments();
    res.json({
      success: true,
      message: `Seeded ${result.upsertedCount} new pages. Total: ${total}.`,
      upserted: result.upsertedCount,
      total,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
