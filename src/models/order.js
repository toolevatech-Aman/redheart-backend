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
  deliveryDate: Date,
  deliverySlot: String,
  shippingCharges: Number,
  coupanApplied: String,
  coupanDiscount: Number,
  totalShipmentPrice: Number,
  totalProductPrice: Number,
  totalPrice: Number,
  orderNote: { type: String, default: "" } ,
  orderStatus: { type: String, default: 'Pending' } // Pending, Processing, Shipped, Delivered, Cancelled
}, { timestamps: true });

// Auto-generate orderId before save
orderSchema.pre('save', async function(next) {
  if (!this.orderId) {
    const random = Math.floor(1000 + Math.random() * 9000);
    this.orderId = `ORDRH${Date.now()}${random}`;
  }
  next();
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
