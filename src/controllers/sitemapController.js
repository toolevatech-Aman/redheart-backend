import CityPage from "../models/CityPage.js";

const BASE_URL = "https://www.redheart.in";

// Helper: format date as YYYY-MM-DD for sitemap lastmod
const fmtDate = (date) => {
  const d = date ? new Date(date) : new Date();
  return d.toISOString().split("T")[0];
};

// Helper: wrap entries in sitemap XML
const buildSitemapXml = (urls) => {
  const entries = urls
    .map(
      ({ loc, lastmod, changefreq, priority }) =>
        `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;
};

/**
 * GET /sitemap_cities.xml
 * Public — generates a fresh sitemap for all active city pages from the DB.
 */
export const citiesSitemap = async (req, res) => {
  try {
    const cities = await CityPage.find({ isActive: true })
      .select("url updatedAt category")
      .sort({ category: 1, url: 1 })
      .lean();

    const urls = cities.map((city) => ({
      loc:         `${BASE_URL}${city.url}`,
      lastmod:     fmtDate(city.updatedAt),
      changefreq:  "monthly",
      priority:    "0.8",
    }));

    const xml = buildSitemapXml(urls);

    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600"); // cache 1 hour
    return res.send(xml);
  } catch (err) {
    console.error("citiesSitemap error:", err);
    return res.status(500).send("<?xml version='1.0'?><error>Failed to generate sitemap</error>");
  }
};
