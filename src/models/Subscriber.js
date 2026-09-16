import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
  {
    email: { type: String, default: "" },
    phone: { type: String, default: "" },
    type:  { type: String, default: "" },   // e.g. "shayari" | "quote" — which service they signed up for
    plan:  { type: String, enum: ["free", "premium_intent", "premium_trial", "premium"], default: "free" },

    // Razorpay linkage — filled in when a paid/trial subscription is created,
    // so a charge can actually be traced back to a customer.
    razorpayCustomerId:     { type: String, default: "" },
    razorpaySubscriptionId: { type: String, default: "" },
    subscriptionStatus:     { type: String, default: "" }, // created | active | halted | cancelled …

    // GA4 client_id, captured client-side at signup — lets the Razorpay
    // subscription webhook report purchase_shayari/purchase_quote server-side
    // (see razorpaySubscriptionWebhook).
    gaClientId: { type: String, default: "" },
    // First activation/charge already reported to GA4 — by the client itself
    // (the common case, embedded-checkout path) or by the webhook recovering
    // a closed-browser signup. Guards against double-counting the same
    // first charge from both places; renewal charges always report fresh.
    firstChargeReported: { type: Boolean, default: false },

    subscribedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Subscriber", subscriberSchema);
