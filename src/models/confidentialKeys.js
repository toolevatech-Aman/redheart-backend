import mongoose from "mongoose";

const confidentialKeySchema = new mongoose.Schema({
  key: { type: String, unique: true },
  value: String,
});

export default mongoose.model(
  "ConfidentialKey",
  confidentialKeySchema,
  "confidentialKeys" // your collection name
);
