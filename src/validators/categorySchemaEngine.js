// categorySchemaEngine.js
// Single source of truth for all category schemas — used by validation engine,
// upload controller, export controller, and template download endpoint.

const ALL_OCCASION_TAGS = [
  "Anniversary","Appreciation","Baby Shower","Birthday","Cheer Up",
  "Congratulations","Funeral","Get Well Soon","House Warming","I am sorry",
  "Love n Romance","New Born Baby","Thank You","Valentine","Wedding",
];

const ALL_FESTIVAL_TAGS = [
  "New Year","Republic Day","Rose Day","Propose Day","Chocolate Day","Teddy Day",
  "Promise Day","Hug Day","Kiss Day","Valentine's Day","Womens Day","Doctors day",
  "Mothers Day","Brother's Day","Father's Day","Christmas","Lohri","Holi","Eid Al Fitr",
];

const ALL_RELATIONSHIP = [
  "Her","Him","Friends","Wife","Husband","Kids","Boyfriend","Girlfriend","Mother","Father","Brother","Sister",
];

// Each column definition:
// { key, label, mandatory, type, allowedValues, separator, example, note }
export const CATEGORY_SCHEMAS = {
  Flowers: {
    categoryName: "Flowers",
    skuSuffix: "FL",
    columns: [
      { key: "name",                               label: "name",                               mandatory: true,  type: "string",  maxLength: 200, example: "Red Rose Bouquet",                       note: "Full product name. Max 200 chars." },
      { key: "sku",                                label: "sku",                                mandatory: true,  type: "string",  pattern: /^[A-Za-z0-9]+FL$/i, example: "200999FL",               note: "Unique SKU. Must end with FL." },
      { key: "quantity",                           label: "quantity",                           mandatory: true,  type: "number",  min: 0, example: "50",                                              note: "Stock quantity. Integer ≥ 0." },
      { key: "costing_price",                      label: "costing_price",                      mandatory: true,  type: "number",  min: 0, example: "400",                                             note: "Internal cost price (INR)." },
      { key: "original_price",                     label: "original_price",                     mandatory: true,  type: "number",  min: 0, example: "999",                                             note: "MRP shown to customer (INR)." },
      { key: "selling_price",                      label: "selling_price",                      mandatory: true,  type: "number",  min: 0, example: "849",                                             note: "Discounted selling price (INR)." },
      { key: "description",                        label: "description",                        mandatory: true,  type: "string",  maxLength: 2000, example: "A stunning bouquet of 12 fresh red roses.", note: "Full product description." },
      { key: "categorization.subcategory_name",    label: "categorization.subcategory_name",    mandatory: true,  type: "enum",    allowedValues: ["Roses","Lillies","Carnation","Roses and Carnation","Roses and Lily"], example: "Roses", note: "Allowed: Roses | Lillies | Carnation | Roses and Carnation | Roses and Lily" },
      { key: "categorization.type",                label: "categorization.type",                mandatory: true,  type: "enum",    allowedValues: ["Bouquet","Hot Pick","Best Seller","New Arrival"], example: "Hot Pick", note: "Allowed: Bouquet | Hot Pick | Best Seller | New Arrival" },
      { key: "media.primary_image_url",            label: "media.primary_image_url",            mandatory: true,  type: "url",     example: "https://firebasestorage.googleapis.com/...",             note: "Primary image URL. Must start with https://" },
      { key: "short_summary",                      label: "short_summary",                      mandatory: false, type: "string",  maxLength: 150, example: "12 Red Roses | Premium Wrapping",          note: "Short summary. Max 150 chars." },
      { key: "categorization.occasion_tags",       label: "categorization.occasion_tags",       mandatory: false, type: "array",   separator: "|", allowedValues: ALL_OCCASION_TAGS, example: "Birthday|Anniversary|Love n Romance", note: "Pipe-separated. Allowed: " + ALL_OCCASION_TAGS.join(" | ") },
      { key: "categorization.festival_tags",       label: "categorization.festival_tags",       mandatory: false, type: "array",   separator: "|", allowedValues: ALL_FESTIVAL_TAGS, example: "Valentine's Day|Rose Day", note: "Pipe-separated. Allowed: " + ALL_FESTIVAL_TAGS.join(" | ") },
      { key: "categorization.relationship",        label: "categorization.relationship",        mandatory: false, type: "array",   separator: "|", allowedValues: ALL_RELATIONSHIP,  example: "Her|Him|Wife|Girlfriend", note: "Pipe-separated. Allowed: " + ALL_RELATIONSHIP.join(" | ") },
      { key: "product_attributes.color",           label: "product_attributes.color",           mandatory: false, type: "string",  example: "Red",                                                    note: "Primary colour of the flowers." },
      { key: "product_attributes.product_content", label: "product_attributes.product_content", mandatory: false, type: "array",   separator: "|", example: "12 Red Roses|Premium Wrapping Paper|Green Fillers", note: "Pipe-separated. What's included in the product." },
      { key: "product_attributes.stem_length_cm",  label: "product_attributes.stem_length_cm",  mandatory: false, type: "number",  min: 1, example: "40",                                              note: "Stem length in cm." },
      { key: "product_attributes.fragrance_level", label: "product_attributes.fragrance_level", mandatory: false, type: "enum",    allowedValues: ["None","Low","Medium","High"], example: "Medium",   note: "Allowed: None | Low | Medium | High" },
      { key: "product_attributes.vase_life_days_min", label: "product_attributes.vase_life_days_min", mandatory: false, type: "number", min: 1, example: "5",                                        note: "Minimum vase life in days." },
      { key: "product_attributes.origin",          label: "product_attributes.origin",          mandatory: false, type: "string",  example: "Bangalore",                                              note: "Origin city/country." },
      { key: "media.gallery_images",               label: "media.gallery_images",               mandatory: false, type: "array",   separator: "|", example: "https://cdn.../img2.jpg|https://cdn.../img3.jpg", note: "Pipe-separated image URLs. Max 5." },
      { key: "care_and_logistics.care_instructions",         label: "care_and_logistics.care_instructions",         mandatory: false, type: "array", separator: "|", example: "Keep in cool place|Change water daily", note: "Pipe-separated care tips." },
      { key: "care_and_logistics.requires_cold_chain",       label: "care_and_logistics.requires_cold_chain",       mandatory: false, type: "boolean", example: "FALSE",                               note: "TRUE or FALSE." },
      { key: "care_and_logistics.max_delivery_days",         label: "care_and_logistics.max_delivery_days",         mandatory: false, type: "number", min: 1, example: "1",                           note: "Max delivery days. Integer." },
      { key: "care_and_logistics.regional_availability",     label: "care_and_logistics.regional_availability",     mandatory: false, type: "array", separator: "|", example: "Pan India",            note: "Pipe-separated or 'Pan India'." },
      { key: "availability.is_active",             label: "availability.is_active",             mandatory: false, type: "boolean", example: "TRUE",                                                   note: "TRUE = live | FALSE = hidden. Default: TRUE" },
      { key: "availability.is_featured",           label: "availability.is_featured",           mandatory: false, type: "boolean", example: "FALSE",                                                  note: "TRUE = featured. Default: FALSE" },
    ],
  },

  Cakes: {
    categoryName: "Cakes",
    skuSuffix: "CA",
    columns: [
      { key: "name",                               label: "name",                               mandatory: true,  type: "string",  maxLength: 200, example: "Chocolate Truffle Cake",                 note: "Full product name. Max 200 chars." },
      { key: "sku",                                label: "sku",                                mandatory: true,  type: "string",  pattern: /^[A-Za-z0-9]+CA$/i, example: "100999CA",               note: "Unique SKU. Must end with CA." },
      { key: "quantity",                           label: "quantity",                           mandatory: true,  type: "number",  min: 0, example: "20",                                              note: "Stock quantity. Integer ≥ 0." },
      { key: "costing_price",                      label: "costing_price",                      mandatory: true,  type: "number",  min: 0, example: "350",                                             note: "Internal cost price (INR)." },
      { key: "original_price",                     label: "original_price",                     mandatory: true,  type: "number",  min: 0, example: "754",                                             note: "MRP shown to customer (INR)." },
      { key: "selling_price",                      label: "selling_price",                      mandatory: true,  type: "number",  min: 0, example: "629",                                             note: "Discounted selling price (INR)." },
      { key: "description",                        label: "description",                        mandatory: true,  type: "string",  maxLength: 2000, example: "Indulge in layers of rich chocolate sponge and velvety truffle cream.", note: "Full product description." },
      { key: "categorization.subcategory_name",    label: "categorization.subcategory_name",    mandatory: true,  type: "enum",    allowedValues: ["Black Forest Cakes","Chocolate Cakes","Red Velvet Cakes","Ferrero Rocher Cakes","Pinata cake"], example: "Chocolate Cakes", note: "Allowed: Black Forest Cakes | Chocolate Cakes | Red Velvet Cakes | Ferrero Rocher Cakes | Pinata cake" },
      { key: "categorization.type",                label: "categorization.type",                mandatory: true,  type: "enum",    allowedValues: ["Hot Pick","Best Seller","New Arrival"], example: "Hot Pick", note: "Allowed: Hot Pick | Best Seller | New Arrival" },
      { key: "media.primary_image_url",            label: "media.primary_image_url",            mandatory: true,  type: "url",     example: "https://firebasestorage.googleapis.com/...",             note: "Primary image URL. Must start with https://" },
      { key: "short_summary",                      label: "short_summary",                      mandatory: false, type: "string",  maxLength: 150, example: "Rich chocolate sponge | Truffle cream | 500g", note: "Short summary. Max 150 chars." },
      { key: "categorization.occasion_tags",       label: "categorization.occasion_tags",       mandatory: false, type: "array",   separator: "|", allowedValues: ALL_OCCASION_TAGS, example: "Birthday|Anniversary|Congratulations", note: "Pipe-separated. Allowed: " + ALL_OCCASION_TAGS.join(" | ") },
      { key: "categorization.festival_tags",       label: "categorization.festival_tags",       mandatory: false, type: "array",   separator: "|", allowedValues: ALL_FESTIVAL_TAGS, example: "Christmas|New Year|Valentine's Day", note: "Pipe-separated. Allowed: " + ALL_FESTIVAL_TAGS.join(" | ") },
      { key: "categorization.relationship",        label: "categorization.relationship",        mandatory: false, type: "array",   separator: "|", allowedValues: ALL_RELATIONSHIP,  example: "Her|Him|Wife|Husband|Kids|Friends", note: "Pipe-separated. Allowed: " + ALL_RELATIONSHIP.join(" | ") },
      { key: "media.gallery_images",               label: "media.gallery_images",               mandatory: false, type: "array",   separator: "|", example: "https://cdn.../img2.jpg|https://cdn.../img3.jpg", note: "Pipe-separated image URLs. Max 5." },
      { key: "care_and_logistics.care_instructions",     label: "care_and_logistics.care_instructions",     mandatory: false, type: "array", separator: "|", example: "Store in refrigerator|Best consumed within 24 hours", note: "Pipe-separated care tips." },
      { key: "care_and_logistics.max_delivery_days",     label: "care_and_logistics.max_delivery_days",     mandatory: false, type: "number", min: 1, example: "1",                           note: "Max delivery days. Integer." },
      { key: "availability.is_active",             label: "availability.is_active",             mandatory: false, type: "boolean", example: "TRUE",                                                   note: "TRUE = live | FALSE = hidden. Default: TRUE" },
      { key: "availability.is_featured",           label: "availability.is_featured",           mandatory: false, type: "boolean", example: "FALSE",                                                  note: "TRUE = featured. Default: FALSE" },
      { key: "variations.variant_name",            label: "variations.variant_name",            mandatory: false, type: "string",  example: "0.5 Kg",                                                 note: "Variant label. E.g. 0.5 Kg | 1 Kg | 1.5 Kg | 2 Kg" },
      { key: "variations.variant_sku",             label: "variations.variant_sku",             mandatory: false, type: "string",  example: "100999CA-500G",                                          note: "Unique SKU for this variant." },
      { key: "variations.weight_kg",               label: "variations.weight_kg",               mandatory: false, type: "number",  min: 0.1, example: "0.5",                                          note: "Weight in Kg. Decimal allowed." },
      { key: "variations.original_price",          label: "variations.original_price",          mandatory: false, type: "number",  min: 0, example: "754",                                             note: "MRP for this variant (INR)." },
      { key: "variations.selling_price",           label: "variations.selling_price",           mandatory: false, type: "number",  min: 0, example: "629",                                             note: "Selling price for this variant (INR)." },
      { key: "variations.quantity_available",      label: "variations.quantity_available",      mandatory: false, type: "number",  min: 0, example: "15",                                              note: "Stock for this variant. Integer." },
    ],
  },

  Plants: {
    categoryName: "Plants",
    skuSuffix: "PL",
    columns: [
      { key: "name",                               label: "name",                               mandatory: true,  type: "string",  maxLength: 200, example: "Laurentii Snake Plant",                  note: "Full product name. Max 200 chars." },
      { key: "sku",                                label: "sku",                                mandatory: true,  type: "string",  pattern: /^[A-Za-z0-9]+PL$/i, example: "300999PL",               note: "Unique SKU. Must end with PL." },
      { key: "quantity",                           label: "quantity",                           mandatory: true,  type: "number",  min: 0, example: "35",                                              note: "Stock quantity. Integer ≥ 0." },
      { key: "costing_price",                      label: "costing_price",                      mandatory: true,  type: "number",  min: 0, example: "300",                                             note: "Internal cost price (INR)." },
      { key: "original_price",                     label: "original_price",                     mandatory: true,  type: "number",  min: 0, example: "594",                                             note: "MRP shown to customer (INR)." },
      { key: "selling_price",                      label: "selling_price",                      mandatory: true,  type: "number",  min: 0, example: "540",                                             note: "Discounted selling price (INR)." },
      { key: "description",                        label: "description",                        mandatory: true,  type: "string",  maxLength: 2000, example: "The Laurentii Snake Plant is an air-purifying indoor plant.", note: "Full product description." },
      { key: "categorization.subcategory_name",    label: "categorization.subcategory_name",    mandatory: true,  type: "enum",    allowedValues: ["Snake Plant","Money Plant","Jade Plant","Peace Lily Plant","Syngonium","Bonsai"], example: "Snake Plant", note: "Allowed: Snake Plant | Money Plant | Jade Plant | Peace Lily Plant | Syngonium | Bonsai" },
      { key: "categorization.type",                label: "categorization.type",                mandatory: true,  type: "enum",    allowedValues: ["Hot Pick","Best Seller","New Arrival"], example: "Hot Pick", note: "Allowed: Hot Pick | Best Seller | New Arrival" },
      { key: "media.primary_image_url",            label: "media.primary_image_url",            mandatory: true,  type: "url",     example: "https://firebasestorage.googleapis.com/...",             note: "Primary image URL. Must start with https://" },
      { key: "short_summary",                      label: "short_summary",                      mandatory: false, type: "string",  maxLength: 150, example: "Air Purifying | Low Maintenance | Ceramic Pot", note: "Short summary. Max 150 chars." },
      { key: "categorization.occasion_tags",       label: "categorization.occasion_tags",       mandatory: false, type: "array",   separator: "|", allowedValues: ALL_OCCASION_TAGS, example: "Birthday|House Warming|Appreciation", note: "Pipe-separated. Allowed: " + ALL_OCCASION_TAGS.join(" | ") },
      { key: "categorization.festival_tags",       label: "categorization.festival_tags",       mandatory: false, type: "array",   separator: "|", allowedValues: ALL_FESTIVAL_TAGS, example: "New Year|Mothers Day|Father's Day", note: "Pipe-separated. Allowed: " + ALL_FESTIVAL_TAGS.join(" | ") },
      { key: "categorization.relationship",        label: "categorization.relationship",        mandatory: false, type: "array",   separator: "|", allowedValues: ALL_RELATIONSHIP,  example: "Her|Him|Mother|Father|Friends", note: "Pipe-separated. Allowed: " + ALL_RELATIONSHIP.join(" | ") },
      { key: "product_attributes.color",           label: "product_attributes.color",           mandatory: false, type: "string",  example: "Green",                                                  note: "Primary colour of plant or pot." },
      { key: "product_attributes.product_content", label: "product_attributes.product_content", mandatory: false, type: "array",   separator: "|", example: "1 Snake Plant|1 Ceramic Pot|Care Card", note: "Pipe-separated. What's included." },
      { key: "product_attributes.origin",          label: "product_attributes.origin",          mandatory: false, type: "string",  example: "India",                                                  note: "Origin country/region." },
      { key: "media.gallery_images",               label: "media.gallery_images",               mandatory: false, type: "array",   separator: "|", example: "https://cdn.../img2.jpg|https://cdn.../img3.jpg", note: "Pipe-separated image URLs. Max 5." },
      { key: "care_and_logistics.care_instructions",     label: "care_and_logistics.care_instructions",     mandatory: false, type: "array", separator: "|", example: "Water once a week|Indirect sunlight", note: "Pipe-separated care tips." },
      { key: "care_and_logistics.max_delivery_days",     label: "care_and_logistics.max_delivery_days",     mandatory: false, type: "number", min: 1, example: "3",                           note: "Max delivery days. Integer." },
      { key: "care_and_logistics.regional_availability", label: "care_and_logistics.regional_availability", mandatory: false, type: "array", separator: "|", example: "Pan India",            note: "Pipe-separated or 'Pan India'." },
      { key: "availability.is_active",             label: "availability.is_active",             mandatory: false, type: "boolean", example: "TRUE",                                                   note: "TRUE = live | FALSE = hidden. Default: TRUE" },
      { key: "availability.is_featured",           label: "availability.is_featured",           mandatory: false, type: "boolean", example: "FALSE",                                                  note: "TRUE = featured. Default: FALSE" },
    ],
  },
};
