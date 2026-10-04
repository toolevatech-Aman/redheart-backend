import Reminder from "../models/Reminder.js";
import User from "../models/User.js";

// ── Admin: every customer's reminders, with customer details joined in ──────
export const listAllReminders = async (req, res) => {
  try {
    const { search = "", occasionType, page = 1, limit = 50 } = req.query;
    const pageNum = Math.max(1, Number(page) || 1);
    const limitNum = Math.min(200, Math.max(1, Number(limit) || 50));

    const query = {};
    if (occasionType) query.occasionType = occasionType;
    if (search.trim()) query.relationName = { $regex: search.trim(), $options: "i" };

    const [reminders, total] = await Promise.all([
      Reminder.find(query)
        .sort({ createdAt: -1 })
        .skip((pageNum - 1) * limitNum)
        .limit(limitNum)
        .lean(),
      Reminder.countDocuments(query),
    ]);

    const userIds = [...new Set(reminders.map((r) => r.userId).filter(Boolean))];
    const users = await User.find({ userId: { $in: userIds } })
      .select("userId name email phone")
      .lean();
    const userMap = Object.fromEntries(users.map((u) => [u.userId, u]));

    const data = reminders.map((r) => ({
      ...r,
      customer: userMap[r.userId] || null,
    }));

    res.json({
      success: true,
      data,
      pagination: { page: pageNum, limit: limitNum, total, totalPages: Math.ceil(total / limitNum) },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ── List the logged-in user's own reminders ─────────────────────────────────
export const listMyReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find({ userId: req.user.userId }).sort({ month: 1, day: 1 }).lean();
    res.json({ success: true, data: reminders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ── Create ───────────────────────────────────────────────────────────────────
export const createReminder = async (req, res) => {
  try {
    const { relationName, relationType, occasionType, month, day, notes, leadDays } = req.body;
    if (!relationName?.trim()) return res.status(400).json({ success: false, message: "relationName is required" });
    if (!month || !day) return res.status(400).json({ success: false, message: "month and day are required" });

    const reminder = await Reminder.create({
      userId: req.user.userId,
      relationName: relationName.trim(),
      relationType, occasionType,
      month: Number(month), day: Number(day),
      notes: notes || "",
      leadDays: leadDays != null ? Number(leadDays) : 3,
    });
    res.status(201).json({ success: true, data: reminder });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// ── Update (only the owner can edit their own reminder) ─────────────────────
export const updateReminder = async (req, res) => {
  try {
    const reminder = await Reminder.findOne({ _id: req.params.id, userId: req.user.userId });
    if (!reminder) return res.status(404).json({ success: false, message: "Not found" });

    const { relationName, relationType, occasionType, month, day, notes, leadDays } = req.body;
    if (relationName !== undefined) reminder.relationName = relationName.trim();
    if (relationType !== undefined) reminder.relationType = relationType;
    if (occasionType !== undefined) reminder.occasionType = occasionType;
    if (month !== undefined) reminder.month = Number(month);
    if (day !== undefined) reminder.day = Number(day);
    if (notes !== undefined) reminder.notes = notes;
    if (leadDays !== undefined) reminder.leadDays = Number(leadDays);
    await reminder.save();

    res.json({ success: true, data: reminder });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// ── Delete ───────────────────────────────────────────────────────────────────
export const deleteReminder = async (req, res) => {
  try {
    const reminder = await Reminder.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });
    if (!reminder) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
