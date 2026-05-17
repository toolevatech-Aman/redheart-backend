import mongoose from "mongoose";

export const connectDB = async () => {
  console.log("MONGO_URI:", process.env.MONGO_URI);

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected successfully");

    // One-time migrations: drop erroneous unique indexes that block new user creation.
    try {
      const db = mongoose.connection.db;
      const indexes = await db.collection("users").indexes();

      for (const idx of indexes) {
        // phone_1 unique without sparse → only one user can have phone:null
        if (idx.key?.phone && idx.unique && !idx.sparse) {
          await db.collection("users").dropIndex(idx.name);
          console.log("✅ Dropped non-sparse unique index on phone:", idx.name);
        }
        // coupons.code unique → only one user can have NEW10/HAPPY100 coupons
        if (idx.key?.["coupons.code"] && idx.unique) {
          await db.collection("users").dropIndex(idx.name);
          console.log("✅ Dropped unique index on coupons.code:", idx.name);
        }
      }
    } catch (idxErr) {
      console.warn("⚠️  Index migration error:", idxErr.message);
    }
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
