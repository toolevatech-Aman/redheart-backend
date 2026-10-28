import Order from "../models/order.js";
import User from "../models/User.js";
import { getRazorpayInstance } from "../services/razorpay.js";
import { markCouponUsed } from "../utils/couponEngine.js";
import { PAYMENT_CHANNELS } from "../utils/manualOrderLogic.js";
import { buildLinkRequest, linkStatus, paidPayment, amountMatches } from "../utils/paymentLinkLogic.js";

// Replaceable in tests so no real Razorpay call is made.
let getRzp = getRazorpayInstance;
export const setRazorpayProvider = (fn) => { getRzp = fn || getRazorpayInstance; };

const fail = (res, code, message) => res.status(code).json({ success: false, message });
const findByOrderId = (orderId) => Order.findOne({ orderId: String(orderId) });

// Payable = a staff-created order that is still waiting for money.
function assertPayable(order) {
  if (!order) return "Order not found";
  if (order.source !== "manual") return "Payment links are only for orders created by staff";
  if (order.orderStatus === "Cancelled") return "This order is cancelled";
  if (order.paymentStatus === "PAID") return "This order is already paid";
  if (order.paymentStatus === "COD") return "This is a cash-on-delivery order";
  return null;
}

// Creates a fresh link (cancelling any earlier one) and stores it on the order.
export async function issuePaymentLink(order) {
  const rzp = await getRzp();
  const user = await User.findOne({ userId: order.userId }).select("name phone email").lean();
  if (order.paymentLinkId && order.paymentLinkStatus === "created") {
    await rzp.paymentLink.cancel(order.paymentLinkId).catch(() => undefined);   // best effort: the old link must not stay payable
  }
  const request = buildLinkRequest({ order, user });
  const link = await rzp.paymentLink.create(request);
  const url = link.short_url || link.shortUrl;
  if (!link.id || !url) throw new Error("Razorpay did not return a payment link");
  const saved = await Order.findByIdAndUpdate(order._id, {
    $set: {
      paymentLinkId: link.id, paymentLinkUrl: url, paymentLinkStatus: "created",
      paymentLinkExpiresAt: new Date(request.expire_by * 1000),
      paymentMode: "PREPAID", paymentStatus: "PENDING",
    },
  }, { new: true });
  return { order: saved, url, id: link.id };
}

// The one place an order becomes paid. Atomic, so a webhook and a manual "check payment"
// arriving together can't both count it (or use the coupon twice). Returns the order if
// THIS call made the change, otherwise null.
export async function markOrderPaid(order, { payment, channel = "", reference = "", via }) {
  const set = {
    paymentStatus: "PAID", paidAt: new Date(), paymentLinkStatus: "paid",
    paymentMode: "PREPAID",
    // typed text goes in as a literal: a value starting with "$" must never be read as a field name
    paymentChannel: { $literal: channel || (via === "manual" ? "Other" : "Payment link") },
    paymentReference: { $literal: String(reference || payment?.id || "").slice(0, 100) },
    // only a not-yet-started order moves to Processing; never undo a later status
    orderStatus: { $cond: [{ $eq: ["$orderStatus", "Pending"] }, "Processing", "$orderStatus"] },
  };
  if (payment?.id) set.razorpayPaymentId = { $literal: String(payment.id) };
  const changed = await Order.findOneAndUpdate(
    { _id: order._id, paymentStatus: { $ne: "PAID" } },
    [{ $set: set }],
    { new: true },
  );
  if (!changed) return null;
  if (changed.coupanApplied) {
    markCouponUsed({ code: changed.coupanApplied, source: changed.coupanSource, userId: changed.userId })
      .catch((e) => console.error("markCouponUsed (payment link):", e.message));
  }
  console.log(`[payment-link] ${changed.orderId} marked paid (${via})`);
  return changed;
}

// POST /orders/admin/:orderId/payment-link
export const createLinkForOrder = async (req, res) => {
  try {
    const order = await findByOrderId(req.params.orderId);
    const problem = assertPayable(order);
    if (problem) return fail(res, order ? 400 : 404, problem);
    const out = await issuePaymentLink(order);
    res.json({ success: true, data: { url: out.url, id: out.id, order: out.order } });
  } catch (err) {
    console.error("createLinkForOrder:", err.message);
    fail(res, 502, err.error?.description || err.message || "Could not create the payment link");
  }
};

// POST /orders/admin/:orderId/refresh-payment  ("Check payment")
export const refreshPayment = async (req, res) => {
  try {
    const order = await findByOrderId(req.params.orderId);
    if (!order) return fail(res, 404, "Order not found");
    if (order.paymentStatus === "PAID") return res.json({ success: true, paid: true, status: "paid", data: order });
    if (!order.paymentLinkId) return fail(res, 400, "This order has no payment link");
    const rzp = await getRzp();
    const link = await rzp.paymentLink.fetch(order.paymentLinkId);
    const status = linkStatus(link);
    if (status === "paid") {
      if (!amountMatches(order, link)) return fail(res, 409, "The amount paid does not match the order total. Check it in Razorpay.");
      const updated = await markOrderPaid(order, { payment: paidPayment(link), via: "refresh" });
      return res.json({ success: true, paid: true, status, data: updated || (await findByOrderId(order.orderId)) });
    }
    if (status !== order.paymentLinkStatus && ["expired", "cancelled"].includes(status)) {
      order.paymentLinkStatus = status; await order.save();
    }
    res.json({ success: true, paid: false, status, data: order });
  } catch (err) {
    console.error("refreshPayment:", err.message);
    fail(res, 502, err.error?.description || err.message || "Could not check the payment");
  }
};

// POST /orders/admin/:orderId/mark-paid  { channel, reference }
export const markPaidManually = async (req, res) => {
  try {
    const order = await findByOrderId(req.params.orderId);
    if (!order) return fail(res, 404, "Order not found");
    if (order.orderStatus === "Cancelled") return fail(res, 400, "This order is cancelled");
    if (order.paymentStatus === "PAID") return fail(res, 400, "This order is already paid");
    const channel = String(req.body?.channel || "");
    if (!PAYMENT_CHANNELS.includes(channel)) return fail(res, 400, "Choose how the payment was received");
    // the customer must not be able to pay the link as well afterwards
    if (order.paymentLinkId && order.paymentLinkStatus === "created") {
      try { await (await getRzp()).paymentLink.cancel(order.paymentLinkId); } catch { /* already paid/expired: fine */ }
    }
    const updated = await markOrderPaid(order, { channel, reference: req.body?.reference, via: "manual" });
    if (!updated) return fail(res, 409, "This order was just marked paid");
    res.json({ success: true, data: updated });
  } catch (err) {
    console.error("markPaidManually:", err.message);
    fail(res, 500, "Could not mark the order paid");
  }
};

// Webhook: event "payment_link.paid". Returns true when it handled the event.
export async function handlePaymentLinkPaid(event) {
  const link = event?.payload?.payment_link?.entity;
  const payment = event?.payload?.payment?.entity;
  if (!link?.id) return true;
  const order = await Order.findOne({ paymentLinkId: link.id });
  if (!order) return true;                                 // not one of ours (or an old, replaced link)
  if (order.paymentStatus === "PAID") return true;         // already counted
  if (!amountMatches(order, link) && !amountMatches(order, payment)) {
    console.error(`[payment-link] amount mismatch for ${order.orderId}: not marking paid`);
    return true;
  }
  await markOrderPaid(order, { payment: paidPayment(link, payment), via: "webhook" });
  return true;
}
