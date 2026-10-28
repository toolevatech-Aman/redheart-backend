import { v4 as uuidv4 } from "uuid";
import Order from "../models/order.js";
import User from "../models/User.js";
import Product from "../models/Product.js";
import { validateAndComputeCoupon, markCouponUsed } from "../utils/couponEngine.js";
import { computePincodeSurcharge } from "./pincodeSurchargeController.js";
import { issuePaymentLink } from "./paymentLinkController.js";
import { computeDeliverySurcharge } from "./deliverySurchargeController.js";
import {
  ManualOrderError, MAX_LINES, ORDER_CHANNELS, cleanAddress, parseDeliveryDate, resolveLine,
  priceOrder, checkPayment, normPhone,
} from "../utils/manualOrderLogic.js";

const esc = (s) => String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const fail = (res, err) => {
  if (err instanceof ManualOrderError) return res.status(err.status).json({ success: false, message: err.message });
  console.error("manualOrder error:", err);
  return res.status(500).json({ success: false, message: "Server error" });
};
const customerShape = (u) => ({
  userId: u.userId, name: u.name || "", phone: u.phone || "", email: u.email || "",
  addresses: (u.addresses || []).map((a) => ({
    _id: a._id, firstName: a.firstName, lastName: a.lastName, street: a.street, city: a.city,
    state: a.state, postalCode: a.postalCode, phone: a.phone, label: a.label, isDefault: a.isDefault,
  })),
});

// ── Customers ───────────────────────────────────────────────────────────────
export const searchCustomers = async (req, res) => {
  try {
    const q = String(req.query.q || "").trim();
    if (q.length < 2) return res.json({ success: true, data: [] });
    const rx = new RegExp(esc(q), "i");
    const or = [{ name: rx }, { email: rx }];
    const digits = q.replace(/\D/g, "");
    if (digits.length >= 4) or.push({ phone: new RegExp(esc(digits.slice(-10))) });
    const users = await User.find({ role: "user", $or: or })
      .select("userId name phone email addresses").sort({ lastLoginAt: -1 }).limit(8).lean();
    res.json({ success: true, data: users.map(customerShape) });
  } catch (err) { fail(res, err); }
};

export const getCustomer = async (req, res) => {
  try {
    const u = await User.findOne({ userId: String(req.params.userId) }).select("userId name phone email addresses role").lean();
    if (!u || u.role !== "user") return res.status(404).json({ success: false, message: "Customer not found" });
    res.json({ success: true, data: customerShape(u) });
  } catch (err) { fail(res, err); }
};

// A customer who has never logged in on the site: a name and a phone are enough.
export const createCustomer = async (req, res) => {
  try {
    const name = String(req.body.name || "").trim().slice(0, 80);
    if (name.length < 2) return res.status(400).json({ success: false, message: "Enter the customer's name" });
    const phone = normPhone(req.body.phone);
    if (!phone) return res.status(400).json({ success: false, message: "Enter a valid 10-digit phone number" });
    const email = String(req.body.email || "").trim().toLowerCase().slice(0, 120);
    if (email && !/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ success: false, message: "Enter a valid email or leave it blank" });

    const existing = await User.findOne({ phone }).select("userId name phone email addresses role").lean();
    if (existing) return res.json({ success: true, existing: true, data: customerShape(existing) });

    const user = await User.create({ userId: uuidv4(), phone, name, email: email || null, role: "user", isVerified: false });
    res.status(201).json({ success: true, existing: false, data: customerShape(user.toObject()) });
  } catch (err) { fail(res, err); }
};

// ── Products ────────────────────────────────────────────────────────────────
export const searchProducts = async (req, res) => {
  try {
    const q = String(req.query.q || "").trim();
    if (q.length < 2) return res.json({ success: true, data: [] });
    const rx = new RegExp(esc(q), "i");
    const products = await Product.find({ $or: [{ name: rx }, { sku: rx }, { product_id: rx }] })
      .select("product_id name sku selling_price original_price media.primary_image_url categorization.category_name product_attributes.delivery_type variations care_and_logistics.add_ons")
      .limit(10).lean();
    res.json({
      success: true,
      data: products.map((p) => ({
        product_id: p.product_id, name: p.name, sku: p.sku,
        selling_price: p.selling_price, original_price: p.original_price,
        image: p.media?.primary_image_url || "", category: p.categorization?.category_name || "",
        delivery_type: p.product_attributes?.delivery_type || "same_day",
        variations: (p.variations || []).map((v) => ({ _id: String(v._id), variant_name: v.variant_name, selling_price: v.selling_price, original_price: v.original_price })),
        add_ons: (p.care_and_logistics?.add_ons || []).map((a) => ({ _id: String(a._id), name: a.name, selling_price: a.selling_price, image_url: a.image_url })),
      })),
    });
  } catch (err) { fail(res, err); }
};

// ── Quote (preview and create share it) ─────────────────────────────────────
async function buildQuote(body) {
  const items = Array.isArray(body.items) ? body.items : [];
  if (!items.length) throw new ManualOrderError("Add at least one product");
  if (items.length > MAX_LINES) throw new ManualOrderError(`An order can have at most ${MAX_LINES} lines`);

  const user = await User.findOne({ userId: String(body.customerId || "") }).select("userId name phone email role").lean();
  if (!user || user.role !== "user") throw new ManualOrderError("Choose a customer");

  const ids = [...new Set(items.map((i) => String(i.productId || "")).filter(Boolean))];
  const oids = ids.filter((id) => /^[0-9a-fA-F]{24}$/.test(id));
  const products = await Product.find({ $or: [{ product_id: { $in: ids } }, ...(oids.length ? [{ "variations._id": { $in: oids } }, { _id: { $in: oids } }] : [])] }).lean();
  const findProduct = (pid) => products.find((p) => p.product_id === pid || (p.variations || []).some((v) => String(v._id) === pid) || String(p._id) === pid);

  const lines = items.map((it) => {
    const product = findProduct(String(it.productId || ""));
    if (!product) throw new ManualOrderError("A selected product no longer exists");
    return resolveLine(product, it);
  });
  const subtotalRaw = lines.reduce((s, l) => s + l.lineTotal, 0);

  const address = cleanAddress(body.shippingAddress);
  const warnings = [];

  let couponCode = String(body.coupon || "").trim().toUpperCase() || null;
  let coupon = { discount: 0, source: null };
  if (couponCode) {
    const cats = [...new Set(lines.map((l) => l.category).filter(Boolean))];
    coupon = await validateAndComputeCoupon({ code: couponCode, userId: user.userId, subtotal: subtotalRaw, shippingCharges: Number(body.shippingCharges) || 0, cartCategories: cats });
    if (!coupon.source) { warnings.push(coupon.error || "Coupon is not valid"); couponCode = null; }
  }

  const waive = !!body.waiveSurcharges;
  const [pin, del] = await Promise.all([computePincodeSurcharge(address.postalCode, subtotalRaw), computeDeliverySurcharge(address.postalCode)]);
  const priced = priceOrder({
    lineTotals: lines.map((l) => l.lineTotal), shipping: body.shippingCharges, couponDiscount: coupon.discount,
    adminDiscount: body.discount, discountReason: body.discountReason,
    pincodeSurcharge: pin.amount || 0, deliverySurcharge: del.amount || 0, waiveSurcharges: waive,
  });
  return { user, lines, address, priced, coupon: { code: couponCode, source: coupon.source }, pin, del, waive, warnings };
}

const quoteView = (q) => ({
  lines: q.lines.map((l) => ({ name: l.cartItem.name, variant_name: l.cartItem.variant_name, quantity: l.cartItem.quantity, unit: l.cartItem.selling_price, addOns: l.cartItem.add_ons, lineTotal: l.lineTotal, priceEdited: l.edited })),
  ...q.priced,
  pincodeSurchargeNote: q.priced.pincodeSurcharge ? q.pin.note : "",
  deliverySurchargeNote: q.priced.deliverySurcharge ? q.del.note : "",
  surchargesWaived: q.waive,
  coupon: q.coupon.code,
  warnings: q.warnings,
});

export const previewManualOrder = async (req, res) => {
  try { res.json({ success: true, data: quoteView(await buildQuote(req.body || {})) }); }
  catch (err) { fail(res, err); }
};

export const createManualOrder = async (req, res) => {
  try {
    const body = req.body || {};
    // A double-click or a retry sends the same token: return the order already made.
    const token = String(body.clientToken || "").slice(0, 60);
    if (token) {
      const dup = await Order.findOne({ manualToken: token });
      if (dup) return res.json({ success: true, duplicate: true, data: dup });
    }

    const pay = checkPayment(body);
    const deliveryDate = parseDeliveryDate(body.deliveryDate);
    const deliverySlot = String(body.deliverySlot || "").trim().slice(0, 60);
    if (!deliverySlot) throw new ManualOrderError("Choose the delivery slot");
    const channel = ORDER_CHANNELS.includes(body.orderChannel) ? body.orderChannel : "Other";
    const q = await buildQuote(body);
    if (body.coupon && !q.coupon.code) throw new ManualOrderError(q.warnings[0] || "The coupon is not valid");

    const adminId = req.user?.userId || "";
    const cod = pay.mode === "COD";
    const link = pay.mode === "PAYMENT_LINK";
    const order = await Order.create({
      userId: q.user.userId,
      shippingAddress: q.address,
      billingAddress: { ...q.address },
      cartItems: q.lines.map((l) => l.cartItem),
      paymentMode: cod ? "COD" : "PREPAID",
      paymentStatus: cod ? "COD" : link ? "PENDING" : "PAID",
      orderStatus: cod || link ? "Pending" : "Processing",
      deliveryDate, deliverySlot,
      shippingCharges: q.priced.shipping,
      totalShipmentPrice: q.priced.shipping,
      totalProductPrice: q.priced.subtotal,
      coupanApplied: q.coupon.code, coupanDiscount: q.priced.couponDiscount, coupanSource: q.coupon.source,
      adminDiscount: q.priced.adminDiscount, discountReason: q.priced.discountReason,
      pincodeSurcharge: q.priced.pincodeSurcharge, pincodeSurchargeNote: q.priced.pincodeSurcharge ? (q.pin.note || "") : "",
      deliverySurcharge: q.priced.deliverySurcharge, deliverySurchargeNote: q.priced.deliverySurcharge ? (q.del.note || "") : "",
      totalPrice: q.priced.total,
      tipAmount: 0,
      orderNote: String(body.orderNote || "").trim().slice(0, 500),
      adminNote: String(body.adminNote || "").trim().slice(0, 500),
      source: "manual", orderChannel: channel, createdByAdminId: adminId,
      paymentChannel: pay.channel, paymentReference: pay.reference, manualToken: token || undefined,
    });

    // A coupon counts as used once the order is confirmed: now for COD / already paid,
    // and when the customer actually pays for a payment-link order (see paymentLinkController).
    if (q.coupon.code && !link) {
      markCouponUsed({ code: q.coupon.code, source: q.coupon.source, userId: q.user.userId }).catch((e) => console.error("markCouponUsed (manual):", e.message));
    }
    if (link) {
      try {
        const out = await issuePaymentLink(order);
        return res.status(201).json({ success: true, data: out.order, paymentLink: out.url });
      } catch (e) {
        // the order exists; staff can retry the link from the Orders page
        return res.status(201).json({ success: true, data: order, paymentLinkError: e.error?.description || e.message || "Could not create the payment link" });
      }
    }
    res.status(201).json({ success: true, data: order });
  } catch (err) { fail(res, err); }
};
