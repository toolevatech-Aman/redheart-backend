import User from "../models/User.js";
import Order from "../models/order.js";
import Cart from "../models/Cart.js";

const PRODUCT_CATEGORY_SLUG = { Flowers: "flowers", Cakes: "cakes", Plants: "plants" };

// ================= ADMIN: GET ALL USERS =================
// Internal team accounts used for testing — excluded from the admin Users list
// and from analytics so they don't skew real customer/order metrics.
const TEST_ACCOUNT_EMAILS = [
  "toolseva727@gmail.com",
  "amansinha1799@gmail.com",
  "amansinha727@gmail.com",
  "roshini5114@gmail.com",
  "mrinalraj4u@gmail.com",
];

export const getAllUsersAdmin = async (req, res) => {
  try {
    const users = await User.find({ email: { $nin: TEST_ACCOUNT_EMAILS } }).select('-tokens -coupons').sort({ createdAt: -1 }).lean();
    const userIds = users.map(u => u.userId);

    // ── Order counts + last order per user ──────────────────────────────────
    const orderAgg = await Order.aggregate([
      { $match: { userId: { $in: userIds } } },
      { $sort: { createdAt: -1 } },
      {
        $group: {
          _id: "$userId",
          count: { $sum: 1 },
          totalSpent: { $sum: "$totalPrice" },
          lastOrderDate: { $first: "$createdAt" },
          lastOrderStatus: { $first: "$orderStatus" },
          lastOrderId: { $first: "$orderId" },
        },
      },
    ]);
    const orderMap = {};
    orderAgg.forEach(o => { orderMap[o._id] = o; });

    // ── Cart contents per user ───────────────────────────────────────────────
    const carts = await Cart.find({ userId: { $in: userIds } }).lean();
    const cartMap = {};
    carts.forEach(c => { cartMap[c.userId] = c; });

    // ── Resolve product URLs for cart items + buy-now selections ─────────────
    const pidSet = new Set();
    carts.forEach(c => {
      (c.items || []).forEach(ci => ci.productId && pidSet.add(String(ci.productId)));
      if (c.buyNowItem?.productId) pidSet.add(String(c.buyNowItem.productId));
    });
    const pids = [...pidSet];
    const objectIds = pids.filter(id => /^[0-9a-fA-F]{24}$/.test(id));

    const Product = (await import("../models/Product.js")).default;
    const products = await Product.find({
      $or: [
        { _id: { $in: objectIds } },
        { product_id: { $in: pids } },
        { "variants._id": { $in: objectIds } },
      ],
    }).select("product_id slug sku categorization.category_name variants._id").lean();

    const productUrlMap = {};
    for (const p of products) {
      const catName = p.categorization?.category_name || "";
      const catSlug = PRODUCT_CATEGORY_SLUG[catName] || catName.toLowerCase();
      const skuPart = p.sku ? `-${String(p.sku).toLowerCase()}` : "";
      const url = `https://www.redheart.in/p/${catSlug}/${p.slug}${skuPart}`;
      productUrlMap[String(p._id)] = url;
      if (p.product_id) productUrlMap[p.product_id] = url;
      (p.variants || []).forEach(v => { productUrlMap[String(v._id)] = url; });
    }

    const result = users.map(u => {
      const orderInfo = orderMap[u.userId];
      const cart = cartMap[u.userId];
      const cartItems = (cart?.items || []).map(ci => ({
        ...ci,
        product_url: productUrlMap[String(ci.productId)] || null,
      }));
      const cartValue = cartItems.reduce((sum, i) => sum + (i.selling_price || 0) * (i.quantity || 0), 0);
      const buyNowItem = cart?.buyNowItem
        ? { ...cart.buyNowItem, product_url: productUrlMap[String(cart.buyNowItem.productId)] || null }
        : null;

      return {
        _id: u._id,
        name: u.name,
        email: u.email,
        phone: u.phone,
        avatar: u.avatar,
        role: u.role,
        isVerified: u.isVerified,
        addresses: u.addresses || [],
        orderCount: orderInfo?.count || 0,
        totalSpent: orderInfo?.totalSpent || 0,
        lastOrder: orderInfo
          ? { orderId: orderInfo.lastOrderId, date: orderInfo.lastOrderDate, status: orderInfo.lastOrderStatus }
          : null,
        cartItems,
        cartValue,
        buyNowItem,
        cartUpdatedAt: cart?.updatedAt || null,
        createdAt: u.createdAt,
      };
    });

    res.json({ success: true, total: result.length, data: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ================= UPDATE PROFILE =================

export const updateProfile = async (req, res) => {
  try {
    const { name, email, phone, dateOfBirth, addresses } = req.body;

    // Build update object dynamically
    const updateFields = {};

    if (name !== undefined) updateFields.name = name;
    if (email !== undefined) updateFields.email = email;
    if (phone !== undefined) updateFields.phone = phone;
    if (dateOfBirth !== undefined) updateFields.dateOfBirth = dateOfBirth;

    const user = await User.findOne({ userId: req.user.userId });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // If addresses are provided, append them instead of replacing
    if (addresses !== undefined && Array.isArray(addresses)) {
      addresses.forEach((addr) => {
        // If addr.isDefault is true, unset other defaults
        if (addr.isDefault === true) {
          user.addresses.forEach((a) => (a.isDefault = false));
        }
        user.addresses.push(addr);
      });
    }

    // Apply scalar fields directly and mark modified so Mongoose saves them.
    // Object.assign alone can silently skip dirty-tracking for null→value changes.
    for (const [k, v] of Object.entries(updateFields)) {
      user[k] = v;
      user.markModified(k);
    }

    const updatedUser = await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser.toObject({ getters: true, versionKey: false }),
      data: updatedUser.toObject({ getters: true, versionKey: false }),
    });

  } catch (error) {
    console.error("Update Profile Error:", error);

    // Handle duplicate email error
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email already in use"
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};



// ================= GET CURRENT USER =================
export const me = async (req, res) => {
  try {
    const { userId } = req.user;

    // Exclude 'tokens' field
    const user = await User.findOne({ userId }).select('-tokens');

    res.json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const updateAddress = async (req, res) => {
  try {
    const { addressId } = req.params;
    const updates = req.body;

    if (!addressId) {
      return res.status(400).json({
        success: false,
        message: "Address ID is required"
      });
    }

    // Build dynamic update object
    const updateFields = {};
    for (const key in updates) {
      updateFields[`addresses.$.${key}`] = updates[key];
    }

    // If setting default, unset others
    if (updates.isDefault === true) {
      await User.updateOne(
        { userId: req.user.userId },
        { $set: { "addresses.$[].isDefault": false } }
      );
    }

    const user = await User.findOneAndUpdate(
      {
        userId: req.user.userId,
        "addresses._id": addressId
      },
      {
        $set: updateFields
      },
      {
        new: true,
        runValidators: true
      }
    ).select("-tokens");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Address not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Address updated successfully",
      data: user.addresses
    });

  } catch (error) {
    console.error("Update Address Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

export const deleteAddress = async (req, res) => {
  try {
    const { addressId } = req.params;

    const user = await User.findOneAndUpdate(
      { userId: req.user.userId },
      { $pull: { addresses: { _id: addressId } } },
      { new: true }
    ).select("-tokens");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Address deleted successfully",
      data: user.addresses
    });

  } catch (error) {
    console.error("Delete Address Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};
