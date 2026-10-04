import mongoose from "mongoose";

// Ported from FNP's "My Reminders": a customer saves an important date for
// someone in their life so RedHeart can nudge them (email) a few days
// beforehand. `date` stores month+day only — reminders recur every year,
// there's no concept of "this reminder is done" the way a one-off todo would
// have.
const reminderSchema = new mongoose.Schema(
  {
    // RedHeart's User documents key on their own `userId` UUID string field,
    // not Mongo's ObjectId `_id` (see models/User.js / order.js's userId) —
    // matching that here, not the Mongoose-default ObjectId ref.
    userId: { type: String, required: true, index: true },

    relationName: { type: String, required: true, trim: true }, // e.g. "Priya"
    relationType: {
      type: String,
      enum: ["Partner", "Friend", "Parent", "Sibling", "Colleague", "Kid", "Custom"],
      default: "Custom",
    },
    occasionType: {
      type: String,
      enum: [
        "Birthday", "Anniversary", "Retirement", "New Job", "Engagement",
        "Housewarming", "Promotion", "New Baby", "Custom",
      ],
      default: "Birthday",
    },
    // Stored as month (1-12) + day (1-31), independent of year, so the same
    // document naturally recurs every year without needing to be recreated.
    month: { type: Number, required: true, min: 1, max: 12 },
    day:   { type: Number, required: true, min: 1, max: 31 },

    notes: { type: String, default: "" },
    // How many days before the date to send the reminder email.
    leadDays: { type: Number, default: 3, min: 0, max: 30 },

    // Guards against re-sending the same year's reminder if the daily job
    // runs more than once in the lead-up window (matches the guard pattern
    // used by dailyContentDrop/dailyBlogPublish for the same reason).
    lastNotifiedYear: { type: Number, default: null },
  },
  { timestamps: true }
);

reminderSchema.index({ userId: 1, month: 1, day: 1 });

export default mongoose.model("Reminder", reminderSchema);
