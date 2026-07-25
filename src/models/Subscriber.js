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

    subscribedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Subscriber", subscriberSchema);
