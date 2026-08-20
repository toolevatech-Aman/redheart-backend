import User from "../models/User.js";
import Order from "../models/order.js";
import Cart from "../models/Cart.js";

const PRODUCT_CATEGORY_SLUG = { Flowers: "flowers", Cakes: "cakes", Plants: "plants" };

// ================= ADMIN: GET ALL USERS =================
// Internal team accounts used for testing — excluded from the admin Users list
// and from analytics so they don't skew real customer/order metrics.
export const TEST_ACCOUNT_EMAILS = [
  "toolseva727@gmail.com",
  "amansinha1799@gmail.com",
  "amansinha727@gmail.com",
  "roshini5114@gmail.com",
  "mrinalraj4u@gmail.com",
  "rishitrishna000@gmail.com",
  "nernaykumar98@gmail.com",
  "ankit.redhurt@gmail.com",
  "rishisinha727@gmail.com",
  "tooleva.tech@gmail.com",
  "abhisheksuman2999@gmail.com",
];
// Some test accounts have no email — matched by phone instead. Some phone
// numbers are shared across multiple test accounts (re-used during testing).
export const TEST_ACCOUNT_PHONES = [
  "7903829867", "7011379018", "7632099577", "9217032776", "9142380521",
  "8544357887", "7091603520", "6200600070", "6265040401", "6200830664",
];
const normalizePhone = (p) => (p || "").replace(/\D/g, "").slice(-10);
export const isTestAccount = (u) =>
  (u.email && TEST_ACCOUNT_EMAILS.includes(u.email.toLowerCase())) ||
  (u.phone && TEST_ACCOUNT_PHONES.includes(normalizePhone(u.phone)));

export const getAllUsersAdmin = async (req, res) => {
  try {
    const allUsers = await User.find({}).select('-tokens -coupons').sort({ createdAt: -1 }).lean();
    const users = allUsers.filter((u) => !isTestAccount(u));
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
        userId: u.userId,
        name: u.name,
        email: u.email,
        phone: u.phone,
        avatar: u.avatar,
        role: u.role,
        accessLevel: u.accessLevel,
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

// ================= ADMIN: UPDATE A USER'S ROLE / ACCESS LEVEL =================
// Only reachable by "overall" admins (see checkAccess("overall") on the route)
// — SEO/Category-scoped admins cannot grant themselves or anyone else more access.
const VALID_ROLES = ["user", "admin"];
const VALID_ACCESS_LEVELS = ["overall", "seo", "category"];

export const updateUserAccess = async (req, res) => {
  try {
    const { id } = req.params;
    const { role, accessLevel } = req.body;

    if (role !== undefined && !VALID_ROLES.includes(role)) {
      return res.status(400).json({ message: `role must be one of: ${VALID_ROLES.join(", ")}` });
    }
    if (accessLevel !== undefined && !VALID_ACCESS_LEVELS.includes(accessLevel)) {
      return res.status(400).json({ message: `accessLevel must be one of: ${VALID_ACCESS_LEVELS.join(", ")}` });
    }

    const update = {};
    if (role !== undefined) update.role = role;
    if (accessLevel !== undefined) update.accessLevel = accessLevel;

    const user = await User.findOneAndUpdate({ userId: id }, update, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ================= ADMIN: LIST CURRENT ADMINS (for the Access Control page) =====
export const listAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" })
      .select("userId name email avatar accessLevel createdAt")
      .sort({ createdAt: -1 })
      .lean();
    res.json({ success: true, data: admins });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ================= ADMIN: SEARCH USERS BY EMAIL/NAME (to grant access) =========
// Someone must have logged into the panel at least once (creating their User
// doc as a plain "user") before they can be found here and promoted — there's
// no way to pre-invite an email that has never signed in.
export const searchUsersForAccess = async (req, res) => {
  try {
    const q = (req.query.q || "").trim();
    if (!q) return res.json({ success: true, data: [] });

    const users = await User.find({
      $or: [
        { email: { $regex: q, $options: "i" } },
        { name: { $regex: q, $options: "i" } },
      ],
    })
      .select("userId name email avatar role accessLevel createdAt")
      .limit(10)
      .lean();

    res.json({ success: true, data: users });
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
