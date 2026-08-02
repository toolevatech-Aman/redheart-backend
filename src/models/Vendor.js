import mongoose from "mongoose";

// Stats are denormalized onto the vendor doc (not computed via aggregation on
// every read) since recommendation lookups need to be fast and order volume
// is low enough that recompute-on-write is cheap. Recomputing from Order
// history is always possible later if these ever drift.
const vendorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    whatsapp: { type: String, trim: true, default: "" },
    address: { type: String, default: "" },

    // ── Coverage — a vendor can serve one city, many regions, many pin codes ──
    city: { type: String, required: true, trim: true, lowercase: true },
    regions: [{ type: String, trim: true, lowercase: true }],
    pinCodes: [{ type: String, trim: true }],

    products: [{ type: String, enum: ["flowers", "cakes", "plants", "gifts"] }],

    status: { type: String, enum: ["active", "inactive"], default: "active" },
    notes: { type: String, default: "" },

    // ── Vendor's own product price list — reference sheet, not tied to orders ──
    pricingTable: [{
      productName: { type: String, trim: true },
      charge: { type: Number, default: 0 },
    }],

    // ── Denormalized performance stats, updated on order completion ──────────
    stats: {
      totalOrders: { type: Number, default: 0 },
      deliveredOrders: { type: Number, default: 0 },
      cancelledOrders: { type: Number, default: 0 },
      totalCost: { type: Number, default: 0 },     // total settlement paid to vendor (delivered orders)
      avgCost: { type: Number, default: 0 },       // kept for backward compat; UI now shows totalCost as "Settlement"
      totalRevenue: { type: Number, default: 0 },  // sum of order totalPrice for orders this vendor delivered
      margin: { type: Number, default: 0 },        // totalRevenue - totalCost
      successRate: { type: Number, default: 0 },   // %
      lastOrderAt: { type: Date, default: null },
    },
  },
  { timestamps: true }
);

vendorSchema.index({ city: 1 });
vendorSchema.index({ regions: 1 });
vendorSchema.index({ pinCodes: 1 });
vendorSchema.index({ status: 1 });

const Vendor = mongoose.model("Vendor", vendorSchema);

export default Vendor;
