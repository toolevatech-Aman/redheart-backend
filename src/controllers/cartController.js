import Cart from "../models/Cart.js";

// PUT /api/cart — upsert the logged-in user's cart snapshot
export const syncCart = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { items } = req.body;

    if (!Array.isArray(items)) {
      return res.status(400).json({ success: false, message: "items must be an array" });
    }

    // Empty cart -> remove the doc rather than keeping a stale empty record
    if (items.length === 0) {
      await Cart.deleteOne({ userId });
      return res.json({ success: true, data: null });
    }

    const cart = await Cart.findOneAndUpdate(
      { userId },
      { $set: { items } },
      { new: true, upsert: true }
    );
    res.json({ success: true, data: cart });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/cart — logged-in user's own cart
export const getMyCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.userId }).lean();
    res.json({ success: true, data: cart?.items || [] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
