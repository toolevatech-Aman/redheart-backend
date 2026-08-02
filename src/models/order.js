import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  street: String,
  city: String,
  state: String,
  postalCode: String,
  country: String,
  phone: String,
  isDefault: Boolean // only for shipping
});

const addOnSchema = new mongoose.Schema({
  name: String,
  selling_price: Number,
  quantity: Number,
  image_url: String
});

const cartItemSchema = new mongoose.Schema({
  productId: String,
  name: String,
  variant_name: String,
  image_url: String,
  selling_price: Number,
  original_price: Number,
  quantity: Number,
  add_ons: [addOnSchema]
});

const orderSchema = new mongoose.Schema({
  orderId: { type: String, unique: true },
  userId: { type: String, required: true }, // store UUID string// reference to user
  shippingAddress: addressSchema,
  billingAddress: {
    firstName: String,
    lastName: String,
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
    phone: String
  },
  cartItems: [cartItemSchema],
  paymentMode: String,
  paymentStatus: {
    type: String,
    enum: ['PENDING', 'PAID', 'FAILED', 'COD'],
    default: 'PENDING'
  },

  razorpayOrderId: { type: String },
  razorpayPaymentId: { type: String },
  deliveryDate: Date,
  deliverySlot: String,
  shippingCharges: Number,
  coupanApplied: String,
  coupanDiscount: Number,
  totalShipmentPrice: Number,
  totalProductPrice: Number,
  totalPrice: Number,
  orderNote: { type: String, default: "" },
  orderStatus: { type: String, default: 'Pending' }, // Pending, Processing, Shipped, Delivered, Cancelled

  // ── Vendor assignment (manual, via ops) ──────────────────────────────────
  // Whole-order assignment — one vendor delivers everything in the order.
  vendor: {
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor", default: null },
    name: { type: String, default: "" },
    phone: { type: String, default: "" },
    cost: { type: Number, default: null },           // total paid to vendor (product + delivery)
    deliveryCost: { type: Number, default: null },    // delivery-only portion of cost, used for pin-code benchmarking
    assignedAt: { type: Date, default: null },
    deliveryNotes: { type: String, default: "" },
    internalRating: { type: Number, min: 1, max: 5, default: null },
    statCounted: { type: Boolean, default: false }, // guards against double-counting vendor stats
  },

  // Per-product assignment — used instead of `vendor` when different items in
  // the same order are fulfilled by different vendors. One entry per cartItem.
  itemVendors: [{
    cartItemId: { type: String, required: true },
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor" },
    name: { type: String, default: "" },
    phone: { type: String, default: "" },
    cost: { type: Number, default: null },
    deliveryCost: { type: Number, default: null },
    assignedAt: { type: Date, default: null },
    deliveryNotes: { type: String, default: "" },
    statCounted: { type: Boolean, default: false },
  }],
}, { timestamps: true });

// Auto-generate orderId before save
orderSchema.pre('save', async function (next) {
  if (!this.orderId) {
    const random = Math.floor(1000 + Math.random() * 9000);
    this.orderId = `ORDRH${Date.now()}${random}`;
  }
  next();
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
