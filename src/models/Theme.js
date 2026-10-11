import mongoose from "mongoose";

// An occasion theme: ONE main colour (the site derives the whole palette
// from it), an optional one-line announcement bar, and an optional date
// window. See utils/themeCss.js for how it becomes a stylesheet.
const themeSchema = new mongoose.Schema(
  {
    name:    { type: String, required: true, trim: true },
    primary: { type: String, required: true },               // "#rrggbb"
    announcement: {
      text:  { type: String, default: "" },
      bg:    { type: String, default: "#111111" },
      color: { type: String, default: "#ffffff" },
    },
    startsAt:  { type: Date, default: null },                // blank = from now
    endsAt:    { type: Date, default: null },                // blank = until switched off
    // Off by default so saving a draft can never put it on the live site.
    isEnabled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Theme", themeSchema);
