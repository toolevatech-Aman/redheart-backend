// A cartItem's full selling value — base price plus any add-ons attached to
// it. Used wherever per-item (not whole-order) revenue needs to be computed,
// so add-ons aren't silently dropped from vendor/margin math.
export function itemRevenue(item) {
  if (!item) return 0;
  const base = Number(item.selling_price || 0) * Number(item.quantity || 1);
  const addOns = (item.add_ons || []).reduce(
    (s, a) => s + Number(a.selling_price || 0) * Number(a.quantity || 1),
    0
  );
  return base + addOns;
}
