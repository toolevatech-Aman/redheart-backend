import mongoose from "mongoose";

export const connectDB = async () => {
  console.log("MONGO_URI:", process.env.MONGO_URI);

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected successfully");

    // One-time migration: drop the erroneous unique index on coupons.code.
    // This index was defined in the schema with unique:true which caused an
    // E11000 duplicate key crash for every new user after the first, because
    // MongoDB enforced uniqueness of coupon codes globally across all users.
    try {
      const db = mongoose.connection.db;
      const indexes = await db.collection("users").indexes();
      const badIndex = indexes.find(
        (idx) => idx.key && idx.key["coupons.code"] && idx.unique
      );
      if (badIndex) {
        await db.collection("users").dropIndex(badIndex.name);
        console.log("✅ Dropped erroneous unique index on coupons.code:", badIndex.name);
      }
    } catch (idxErr) {
      // Non-fatal — log and continue
      console.warn("⚠️  Could not drop coupons.code index:", idxErr.message);
    }
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
