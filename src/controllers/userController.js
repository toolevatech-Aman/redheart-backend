import User from "../models/User.js";
import Order from "../models/order.js";

// ================= ADMIN: GET ALL USERS =================
export const getAllUsersAdmin = async (req, res) => {
  try {
    const users = await User.find({}).select('-tokens -coupons').sort({ createdAt: -1 });

    // Get order counts per user
    const orderCounts = await Order.aggregate([
      { $group: { _id: "$userId", count: { $sum: 1 } } }
    ]);
    const orderMap = {};
    orderCounts.forEach(o => { orderMap[o._id] = o.count; });

    const result = users.map(u => ({
      _id: u._id,
      name: u.name,
      email: u.email,
      phone: u.phone,
      avatar: u.avatar,
      role: u.role,
      isVerified: u.isVerified,
      orderCount: orderMap[u.userId] || 0,
      createdAt: u.createdAt,
    }));

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
