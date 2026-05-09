import CityPage from "../models/CityPage.js";

// ── Utility helpers ───────────────────────────────────────────────────────────

/**
 * Convert a raw city string to a URL-safe slug.
 * Steps: lowercase → remove non-ASCII → keep only [a-z0-9 -] → spaces→hyphens
 *        → collapse multiple hyphens → trim leading/trailing hyphens
 */
function toSlug(city) {
  return city
    .toLowerCase()
    .replace(/[^\x00-\x7F]/g, "")          // remove non-ASCII
    .replace(/[^a-z0-9 -]/g, "")            // keep alphanumeric, spaces, hyphens
    .replace(/ +/g, "-")                     // spaces → hyphens
    .replace(/-{2,}/g, "-")                  // collapse multiple hyphens
    .replace(/^-+|-+$/g, "");               // trim leading/trailing hyphens
}

/**
 * Convert a raw city string to Proper Case (each word capitalised).
 */
function toProperCase(city) {
  return city
    .trim()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

// ── Category configuration ────────────────────────────────────────────────────

const CATEGORY_CONFIG = {
  Flowers: {
    urlBase: "/florist-near-me",
    metaTitle:        (proper) => `Flower Delivery in ${proper} | Same Day Fresh Flower Delivery from RedHeart`,
    metaDescription:  (proper) => `Shop fresh flowers online in ${proper}: Get same-day & midnight delivery in ${proper}! Your trusted local flower shop in ${proper} - RedHeart. Free Shipping!`,
    h1:               (proper) => `Flower Delivery in ${proper}`,
    metaKeyword:      (proper) => `flower delivery in ${proper}, florist in ${proper}, send flowers to ${proper}, fresh flowers ${proper}, online flower delivery ${proper}, flower shop ${proper}, flowers near me ${proper}, same day flower delivery ${proper}`,
    breadcrumb:       (proper, slug) => [
      { label: "Home",                              url: "/" },
      { label: "Flowers",                           url: "/flowers" },
      { label: `Online Flower Delivery in ${proper}`, url: `/florist-near-me/${slug}` },
    ],
  },

  Cakes: {
    urlBase: "/order-cake-online",
    metaTitle:        (proper) => `Cake Delivery in ${proper} | Same Day Cake Delivery from RedHeart | Upto 20% off`,
    metaDescription:  (proper) => `Shop fresh cakes online in ${proper} from RedHeart. Enjoy free same-day & midnight delivery in ${proper} for birthdays, anniversaries & more. Free shipping!`,
    h1:               (proper) => `Cake Delivery in ${proper}`,
    metaKeyword:      (proper) => `cake delivery in ${proper}, order cake online ${proper}, birthday cake ${proper}, online cake delivery ${proper}, cake shop ${proper}, best cake ${proper}, same day cake delivery ${proper}`,
    breadcrumb:       (proper, slug) => [
      { label: "Home",                            url: "/" },
      { label: "Cakes",                           url: "/cakes" },
      { label: `Online Cake Delivery in ${proper}`, url: `/order-cake-online/${slug}` },
    ],
  },

  Plants: {
    urlBase: "/plants-online",
    metaTitle:        (proper) => `Plants Online in ${proper} | Same Day Live Plants Delivery from RedHeart`,
    metaDescription:  (proper) => `Order & buy plants online in ${proper} at RedHeart - indoor, outdoor & flowering plants. Fast plant delivery in ${proper}. Same-day delivery. Order Now!`,
    h1:               (proper) => `Plants Online in ${proper}`,
    metaKeyword:      (proper) => `plants online ${proper}, buy plants ${proper}, plant delivery ${proper}, indoor plants ${proper}, online nursery ${proper}, plants near me ${proper}, same day plant delivery ${proper}`,
    breadcrumb:       (proper, slug) => [
      { label: "Home",                  url: "/" },
      { label: "Plants",                url: "/plants" },
      { label: `Plants to ${proper}`,   url: `/plants-online/${slug}` },
    ],
  },
};

// ── Data generator ────────────────────────────────────────────────────────────

function generateCityData(category, rawCity) {
  const cfg    = CATEGORY_CONFIG[category];
  const proper = toProperCase(rawCity);
  const slug   = toSlug(rawCity);
  const url    = `${cfg.urlBase}/${slug}`;

  return {
    category,
    cityName:        proper,
    slug,
    url,
    metaTitle:       cfg.metaTitle(proper),
    metaDescription: cfg.metaDescription(proper),
    h1:              cfg.h1(proper),
    canonicalUrl:    `https://www.redheart.in${url}`,
    metaKeyword:     cfg.metaKeyword(proper),
    breadcrumb:      cfg.breadcrumb(proper, slug),
    footerContent:   "",
    faqs:            [],
    isActive:        true,
  };
}

// ── Controller functions ──────────────────────────────────────────────────────

/**
 * GET /api/city/cities/:category
 * Returns all city pages for a given category, sorted by cityName.
 */
export async function getCities(req, res) {
  try {
    const { category } = req.params;
    if (!CATEGORY_CONFIG[category]) {
      return res.status(400).json({ message: "Invalid category" });
    }
    const cities = await CityPage.find({ category }).sort({ cityName: 1 });
    return res.json(cities);
  } catch (err) {
    console.error("getCities error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

/**
 * POST /api/city/cities
 * Body: { category, cityName }
 * Adds a single city page. Returns 409 on duplicate.
 */
export async function addCity(req, res) {
  try {
    const { category, cityName } = req.body;
    if (!category || !cityName) {
      return res.status(400).json({ message: "category and cityName are required" });
    }
    if (!CATEGORY_CONFIG[category]) {
      return res.status(400).json({ message: "Invalid category" });
    }

    const data = generateCityData(category, cityName);
    const city = await CityPage.create(data);
    return res.status(201).json(city);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "City already exists for this category" });
    }
    console.error("addCity error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

/**
 * POST /api/city/cities/bulk
 * Body: { category, cityNames: ["Bangalore", "Mumbai", ...] }
 * Returns { added: [], skipped: [], errors: [] }
 */
export async function addCitiesBulk(req, res) {
  try {
    const { category, cityNames } = req.body;
    if (!category || !Array.isArray(cityNames) || cityNames.length === 0) {
      return res.status(400).json({ message: "category and cityNames[] are required" });
    }
    if (!CATEGORY_CONFIG[category]) {
      return res.status(400).json({ message: "Invalid category" });
    }

    const added   = [];
    const skipped = [];
    const errors  = [];

    for (const rawCity of cityNames) {
      const name = (rawCity || "").trim();
      if (!name) continue;

      try {
        const data = generateCityData(category, name);
        await CityPage.create(data);
        added.push(data.cityName);
      } catch (err) {
        if (err.code === 11000) {
          skipped.push(toProperCase(name));
        } else {
          errors.push({ city: name, error: err.message });
        }
      }
    }

    return res.json({ added, skipped, errors });
  } catch (err) {
    console.error("addCitiesBulk error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

/**
 * PUT /api/city/cities/:id
 * Body: { metaTitle, metaDescription, h1, canonicalUrl, metaKeyword, footerContent, faqs }
 * Updates only SEO-editable fields.
 */
export async function updateCity(req, res) {
  try {
    const { id } = req.params;
    const allowed = ["metaTitle", "metaDescription", "h1", "canonicalUrl", "metaKeyword", "footerContent", "faqs"];
    const update  = {};
    for (const key of allowed) {
      if (req.body[key] !== undefined) update[key] = req.body[key];
    }

    const city = await CityPage.findByIdAndUpdate(id, { $set: update }, { new: true, runValidators: true });
    if (!city) return res.status(404).json({ message: "City not found" });
    return res.json(city);
  } catch (err) {
    console.error("updateCity error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

/**
 * DELETE /api/city/cities/:id
 * Deletes a city page by _id.
 */
export async function deleteCity(req, res) {
  try {
    const { id } = req.params;
    const city = await CityPage.findByIdAndDelete(id);
    if (!city) return res.status(404).json({ message: "City not found" });
    return res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error("deleteCity error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

/**
 * POST /api/city/cities/regenerate/:category
 * Admin route — re-applies current templates to all cities for a given category.
 * Only updates metaKeyword, metaTitle, metaDescription, h1, breadcrumb, canonicalUrl
 * so that manually customised footerContent and faqs are preserved.
 */
export async function regenerateCities(req, res) {
  try {
    const { category } = req.params;
    if (!CATEGORY_CONFIG[category]) {
      return res.status(400).json({ message: "Invalid category" });
    }

    const cities = await CityPage.find({ category });
    let updated = 0;

    for (const city of cities) {
      const cfg    = CATEGORY_CONFIG[category];
      const proper = city.cityName;
      const slug   = city.slug;
      const url    = city.url;

      await CityPage.findByIdAndUpdate(city._id, {
        $set: {
          metaTitle:       cfg.metaTitle(proper),
          metaDescription: cfg.metaDescription(proper),
          h1:              cfg.h1(proper),
          metaKeyword:     cfg.metaKeyword(proper),
          canonicalUrl:    `https://www.redheart.in${url}`,
          breadcrumb:      cfg.breadcrumb(proper, slug),
        },
      });
      updated++;
    }

    return res.json({ message: `Regenerated ${updated} cities for ${category}.`, updated });
  } catch (err) {
    console.error("regenerateCities error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

/**
 * GET /api/city/page/:category/:slug
 * Public route — returns active city page for frontend rendering.
 */
export async function getCityPage(req, res) {
  try {
    const { category, slug } = req.params;
    const city = await CityPage.findOne({ category, slug, isActive: true });
    if (!city) return res.status(404).json({ message: "Page not found" });
    return res.json(city);
  } catch (err) {
    console.error("getCityPage error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}
