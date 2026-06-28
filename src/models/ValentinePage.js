import mongoose from "mongoose";

const valentinePageSchema = new mongoose.Schema(
  {
    slug:          { type: String, required: true, unique: true, index: true },
    partnerName:   { type: String, default: "" },
    yourName:      { type: String, default: "" },
    occasion:      { type: String, default: "Valentine's Day" },
    question:      { type: String, default: "Will you be mine? 💌" },
    yesMessage:    { type: String, default: "YAY! I knew you would say yes!" },
    photoPreview:  { type: String, default: "" },          // base64 or URL
    theme:         { type: String, default: "blush-pink" },
    personality:   { type: String, default: "Sweet" },
    gags:          { type: [String], default: [] },
    music:         { type: String, default: "No music" },
    specialDate:   { type: String, default: "" },
    selectedGift:  { type: String, default: "none" },
    email:         { type: String, default: "" },

    // Payment / order tracking
    isPaid:             { type: Boolean, default: false },
    razorpayPaymentId:  { type: String, default: "" },
    amountPaid:         { type: Number, default: 0 },

    // Recipient response
    responded:    { type: Boolean, default: false },
    respondedAt:  { type: Date },

    // Delivery
    deliveryAddress: { type: String, default: "" },
    deliveryPhone:   { type: String, default: "" },
    orderId:         { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("ValentinePage", valentinePageSchema);
