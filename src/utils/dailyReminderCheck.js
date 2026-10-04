// Daily job: emails a customer when one of their saved "My Reminders" dates
// (see models/Reminder.js) is coming up within its lead-window. Runs once a
// day — see server.js for the schedule.
import nodemailer from "nodemailer";
import Reminder from "../models/Reminder.js";
import User from "../models/User.js";

// Duplicated from utils/orderAlertMail.js rather than shared — same small
// pattern already used elsewhere in this codebase (e.g. getRazorpayKeys) so
// this job has zero risk of breaking the existing order-alert path.
function getTransporter() {
  if (process.env.GMAIL_USER) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASS },
    });
  }
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  return null;
}

const OCCASION_SHOP_LINKS = {
  Birthday:      "https://www.redheart.in/birthday-gifts-delivery",
  Anniversary:   "https://www.redheart.in/anniversary-gifts-delivery",
  Engagement:    "https://www.redheart.in/anniversary-gifts-delivery",
  Housewarming:  "https://www.redheart.in/flowers/house-warming",
};
const DEFAULT_SHOP_LINK = "https://www.redheart.in/florist-near-me";

// This year's (or, if already passed, next year's) occurrence of a
// month/day pair — reminders recur yearly, so the stored date has no year.
function nextOccurrence(month, day, today) {
  const year = today.getFullYear();
  let occurrence = new Date(year, month - 1, day);
  if (occurrence < today) occurrence = new Date(year + 1, month - 1, day);
  return occurrence;
}

export async function runDailyReminderCheck() {
  const transporter = getTransporter();
  if (!transporter) return { sent: 0, skipped: 0, note: "mail not configured" };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const reminders = await Reminder.find({});
  // Reminder.userId is a plain UUID string matching User's own `userId`
  // field, not a Mongoose ObjectId ref — populate() won't resolve it, so
  // batch-fetch the users it actually points to instead.
  const userIds = [...new Set(reminders.map((r) => r.userId))];
  const users = await User.find({ userId: { $in: userIds } }, "userId email name");
  const userByUserId = new Map(users.map((u) => [u.userId, u]));

  let sent = 0;
  let skipped = 0;

  for (const reminder of reminders) {
    const user = userByUserId.get(reminder.userId);
    if (!user?.email) { skipped++; continue; }

    const occurrence = nextOccurrence(reminder.month, reminder.day, today);
    const daysUntil = Math.round((occurrence - today) / (24 * 60 * 60 * 1000));
    const occurrenceYear = occurrence.getFullYear();

    // Guard: don't re-send for the same year's occurrence if the job runs
    // more than once inside the lead window.
    if (daysUntil !== reminder.leadDays || reminder.lastNotifiedYear === occurrenceYear) continue;

    try {
      const shopLink = OCCASION_SHOP_LINKS[reminder.occasionType] || DEFAULT_SHOP_LINK;
      await transporter.sendMail({
        from: `"RedHeart Reminders 💌" <${process.env.GMAIL_USER || process.env.SMTP_USER}>`,
        to: user.email,
        subject: `${reminder.relationName}'s ${reminder.occasionType} is in ${reminder.leadDays} day${reminder.leadDays === 1 ? "" : "s"} 🎉`,
        html: `
          <h2 style="margin:0 0 4px">Don't miss ${reminder.relationName}'s ${reminder.occasionType}!</h2>
          <p style="color:#666">It's coming up on ${occurrence.toLocaleDateString("en-IN", { day: "numeric", month: "long" })}.</p>
          ${reminder.notes ? `<p><strong>Your note:</strong> ${reminder.notes}</p>` : ""}
          <p><a href="${shopLink}" style="display:inline-block;background:#e11d48;color:#fff;padding:10px 20px;border-radius:8px;text-decoration:none;margin-top:8px">Find the perfect gift →</a></p>
        `,
      });
      reminder.lastNotifiedYear = occurrenceYear;
      await reminder.save();
      sent++;
    } catch (err) {
      console.error(`[reminder-check] failed for reminder ${reminder._id}:`, err.message);
      skipped++;
    }
  }

  return { sent, skipped, checked: reminders.length };
}
