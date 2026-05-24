/**
 * Mirror of redheart-nextjs/lib/urlTaxonomy.js
 * Used by the /products/for-page endpoint so the admin can fetch
 * all products that appear on a given frontend page.
 */

const CATEGORY_BASE_FILTERS = {
  'flowers':                    { category_name: 'Flowers' },
  'florist-near-me':            { category_name: 'Flowers' },
  'cakes':                      { category_name: 'Cakes' },
  'order-cake-online':          { category_name: 'Cakes' },
  'plants':                     { category_name: 'Plants' },
  'plants-online':              { category_name: 'Plants' },
  'birthday':                   { occasion_tags: ['Birthday'] },
  'birthday-gifts-delivery':    { occasion_tags: ['Birthday'] },
  'anniversary':                { occasion_tags: ['Anniversary'] },
  'anniversary-gifts-delivery': { occasion_tags: ['Anniversary'] },
  'wedding':                    { occasion_tags: ['Wedding'] },
  'wedding-gifts-online':       { occasion_tags: ['Wedding'] },
  'hampers':                    { category_name: 'Hampers' },
  'gift-hampers':               {},
  'combos-online':              {},
};

const SUBCATEGORY_SLUG_FILTERS = {
  'roses':               { subcategory_name: ['Roses'] },
  'lilies':              { subcategory_name: ['Lillies'] },
  'carnations':          { subcategory_name: ['Carnation'] },
  'roses-and-carnation': { subcategory_name: ['Roses and Carnation'] },
  'roses-and-lily':      { subcategory_name: ['Roses and Lily'] },
  'bouquets':            {},
  'hot-picks':           { type: ['Hot Pick'] },
  'best-sellers':        { type: ['Best Seller'] },
  'new-arrivals':        { type: ['New Arrival'] },
  'red':                 { color: ['Red'] },
  'white':               { color: ['White'] },
  'pink':                { color: ['Pink'] },
  'yellow':              { color: ['Yellow'] },
  'purple':              { color: ['Purple'] },
  'mixed':               { color: ['Mixed'] },
  'birthday':            { occasion_tags: ['Birthday'] },
  'anniversary':         { occasion_tags: ['Anniversary'] },
  'wedding':             { occasion_tags: ['Wedding'] },
  'valentine':           { occasion_tags: ['Valentine'] },
  'love-and-romance':    { occasion_tags: ['Love n Romance'] },
  'congratulations':     { occasion_tags: ['Congratulations'] },
  'get-well-soon':       { occasion_tags: ['Get Well Soon'] },
  'thank-you':           { occasion_tags: ['Thank You'] },
  'house-warming':       { occasion_tags: ['House Warming'] },
  'new-born-baby':       { occasion_tags: ['New Born Baby'] },
  'baby-shower':         { occasion_tags: ['Baby Shower'] },
  'appreciation':        { occasion_tags: ['Appreciation'] },
  'cheer-up':            { occasion_tags: ['Cheer Up'] },
  'i-am-sorry':          { occasion_tags: ['I am sorry'] },
  'funeral':             { occasion_tags: ['Funeral'] },
  'for-her':             { relationship: ['Her'] },
  'for-him':             { relationship: ['Him'] },
  'for-wife':            { relationship: ['Wife'] },
  'for-husband':         { relationship: ['Husband'] },
  'for-mother':          { relationship: ['Mother'] },
  'for-father':          { relationship: ['Father'] },
  'for-girlfriend':      { relationship: ['Girlfriend'] },
  'for-boyfriend':       { relationship: ['Boyfriend'] },
  'for-friends':         { relationship: ['Friends'] },
  'for-kids':            { relationship: ['Kids'] },
  'for-brother':         { relationship: ['Brother'] },
  'for-sister':          { relationship: ['Sister'] },
  'for-parents':         { relationship: ['Mother', 'Father'] },
  'gifts-for-her':       { relationship: ['Her'] },
  'gifts-for-him':       { relationship: ['Him'] },
  'gifts-for-wife':      { relationship: ['Wife'] },
  'gifts-for-husband':   { relationship: ['Husband'] },
  'gifts-for-mother':    { relationship: ['Mother'] },
  'gifts-for-father':    { relationship: ['Father'] },
  'gifts-for-girlfriend':{ relationship: ['Girlfriend'] },
  'gifts-for-boyfriend': { relationship: ['Boyfriend'] },
  'gifts-for-friends':   { relationship: ['Friends'] },
  'gifts-for-brother':   { relationship: ['Brother'] },
  'gifts-for-sister':    { relationship: ['Sister'] },
  'gifts-for-kids':      { relationship: ['Kids'] },
  'gifts-for-parents':   { relationship: ['Mother', 'Father'] },
  'valentines-day':      { festival_tags: ["Valentine's Day"] },
  'rose-day':            { festival_tags: ['Rose Day'] },
  'mothers-day':         { festival_tags: ['Mothers Day'] },
  'womens-day':          { festival_tags: ['Womens Day'] },
  'christmas':           { festival_tags: ['Christmas'] },
  'new-year':            { festival_tags: ['New Year'] },
  'holi':                { festival_tags: ['Holi'] },
  'eid-al-fitr':         { festival_tags: ['Eid Al Fitr'] },
  'fathers-day':         { festival_tags: ["Father's Day"] },
  'lohri':               { festival_tags: ['Lohri'] },
  'propose-day':         { festival_tags: ['Propose Day'] },
  'chocolate-day':       { festival_tags: ['Chocolate Day'] },
  'teddy-day':           { festival_tags: ['Teddy Day'] },
  'promise-day':         { festival_tags: ['Promise Day'] },
  'hug-day':             { festival_tags: ['Hug Day'] },
  'kiss-day':            { festival_tags: ['Kiss Day'] },
  'republic-day':        { festival_tags: ['Republic Day'] },
  'doctors-day':         { festival_tags: ['Doctors day'] },
  'brothers-day':        { festival_tags: ["Brother's Day"] },
  'black-forest':        { subcategory_name: ['Black Forest Cakes'] },
  'chocolate':           { subcategory_name: ['Chocolate Cakes'] },
  'red-velvet':          { subcategory_name: ['Red Velvet Cakes'] },
  'ferrero-rocher':      { subcategory_name: ['Ferrero Rocher Cakes'] },
  'pinata':              { subcategory_name: ['Pinata cake'] },
  'snake':               { subcategory_name: ['Snake Plant'] },
  'money':               { subcategory_name: ['Money Plant'] },
  'jade':                { subcategory_name: ['Jade Plant'] },
  'peace-lily':          { subcategory_name: ['Peace Lily Plant'] },
  'syngonium':           { subcategory_name: ['Syngonium'] },
  'bonsai':              { subcategory_name: ['Bonsai '] },
  'gardening-tools':     { subcategory_name: ['Gardening Tools'] },
  'red-roses':               { color: ['Red'], subcategory_name: ['Roses'] },
  'pink-roses':              { color: ['Pink'], subcategory_name: ['Roses'] },
  'white-lilies':            { color: ['White'], subcategory_name: ['Lillies'] },
  'birthday-roses':          { occasion_tags: ['Birthday'], subcategory_name: ['Roses'] },
  'anniversary-roses':       { occasion_tags: ['Anniversary'], subcategory_name: ['Roses'] },
  'birthday-chocolate':      { occasion_tags: ['Birthday'], subcategory_name: ['Chocolate Cakes'] },
  'birthday-black-forest':   { occasion_tags: ['Birthday'], subcategory_name: ['Black Forest Cakes'] },
  'anniversary-red-velvet':  { occasion_tags: ['Anniversary'], subcategory_name: ['Red Velvet Cakes'] },
  'chocolate-cakes':         { subcategory_name: ['Chocolate Cakes'] },
  'birthday-chocolate-cakes':{ occasion_tags: ['Birthday'], subcategory_name: ['Chocolate Cakes'] },
  'flowers':             { category_name: 'Flowers' },
  'cakes':               { category_name: 'Cakes' },
  'plants':              { category_name: 'Plants' },
  'surprise-gifts':      { type: ['Hot Pick', 'Best Seller'] },
};

const COMBO_CATEGORIES = new Set(['gift-hampers', 'combos-online']);

/**
 * Resolve filter fields from a pageKey (e.g. "flowers/birthday" or "flowers").
 * Returns { category_name, subcategory_name, occasion_tags, festival_tags, type, relationship, color, isCombo, isMixed }
 */
export function resolveFiltersFromPageKey(pageKey) {
  const parts          = pageKey.split('/');
  const categorySlug   = parts[0];
  const subcategorySlug = parts[1] || null;

  const BASE = {
    category_name:    '',
    subcategory_name: [],
    festival_tags:    [],
    occasion_tags:    [],
    type:             [],
    relationship:     [],
    color:            [],
  };

  const result   = { ...BASE };
  const catBase  = CATEGORY_BASE_FILTERS[categorySlug] || {};

  Object.entries(catBase).forEach(([k, v]) => {
    if (Array.isArray(v)) result[k] = [...v];
    else result[k] = v;
  });

  const isCombo = COMBO_CATEGORIES.has(categorySlug);
  const isMixed = !result.category_name;

  if (subcategorySlug && !isCombo) {
    const subFilters = SUBCATEGORY_SLUG_FILTERS[subcategorySlug] || {};
    Object.entries(subFilters).forEach(([k, v]) => {
      if (Array.isArray(v)) {
        const existing = result[k] || [];
        result[k] = [...existing, ...v.filter(x => !existing.includes(x))];
      } else {
        result[k] = v;
      }
    });
  }

  return { ...result, isCombo, isMixed };
}
