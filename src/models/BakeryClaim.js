import mongoose from "mongoose";

// A bakery owner asking to claim/activate their listing on a /cake-shop/{city}/{shop} page.
const bakeryClaimSchema = new mongoose.Schema(
  {
    shopCity:  { type: String, required: true, trim: true },
    shopSlug:  { type: String, required: true, trim: true },
    shopName:  { type: String, default: "", trim: true },
    ownerName: { type: String, required: true, trim: true },
    phone:     { type: String, required: true, trim: true },
    email:     { type: String, default: "", trim: true, lowercase: true },
    role:      { type: String, enum: ["owner", "manager", "staff", "other"], default: "owner" },
    message:   { type: String, default: "", trim: true },
    plan:      { type: String, enum: ["", "free", "basic", "pro"], default: "" }, // plan they were interested in
    status:    { type: String, enum: ["new", "contacted", "verified", "active", "rejected"], default: "new" },
    notes:     { type: String, default: "" }, // admin's own follow-up notes
    sourceUrl: { type: String, default: "" },
    // paid plan (Razorpay subscription, monthly)
    paymentStatus: { type: String, enum: ["none", "pending", "paid", "failed", "cancelled", "halted"], default: "none" },
    razorpayCustomerId: { type: String, default: "" },
    razorpaySubscriptionId: { type: String, default: "", index: true },
    paidPlan: { type: String, enum: ["", "basic", "pro"], default: "" },
    paidAt: { type: Date, default: null },
  },
  { timestamps: true }
);
bakeryClaimSchema.index({ status: 1, createdAt: -1 });
bakeryClaimSchema.index({ shopCity: 1, shopSlug: 1 });

export default mongoose.model("BakeryClaim", bakeryClaimSchema);
