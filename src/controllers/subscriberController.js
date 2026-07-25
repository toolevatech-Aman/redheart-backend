import Subscriber from "../models/Subscriber.js";

// GET /api/subscribers — admin: list all subscribers
export const getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find({}).sort({ subscribedAt: -1 }).lean();
    res.json({ success: true, data: subscribers });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// POST /api/subscribers — public: record a signup (free or paid-intent)
export const createSubscriber = async (req, res) => {
  try {
    const {
      email, phone, type, plan,
      razorpayCustomerId, razorpaySubscriptionId, subscriptionStatus,
    } = req.body;

    if (!email && !phone) {
      return res.status(400).json({ success: false, message: "email or phone is required" });
    }

    // Upsert on phone/email so a repeat signup (e.g. trial -> paid) updates
    // the same record instead of creating duplicates.
    const query = phone ? { phone } : { email };
    const subscriber = await Subscriber.findOneAndUpdate(
      query,
      {
        $set: {
          ...(email && { email }),
          ...(phone && { phone }),
          ...(type && { type }),
          ...(plan && { plan }),
          ...(razorpayCustomerId && { razorpayCustomerId }),
          ...(razorpaySubscriptionId && { razorpaySubscriptionId }),
          ...(subscriptionStatus && { subscriptionStatus }),
        },
        $setOnInsert: { subscribedAt: new Date() },
      },
      { new: true, upsert: true }
    );
    res.status(201).json({ success: true, data: subscriber });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
