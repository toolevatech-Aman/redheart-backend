// middleware/checkAccess.js
//
// Drop-in replacement for isAdmin on routes that belong to a specific
// admin-panel section. "overall" is a superset that passes every check;
// "seo" and "category" only pass checks that explicitly allow them.
//
// Legacy JWTs issued before this field existed won't carry accessLevel —
// they default to "overall" here so already-logged-in full admins aren't
// locked out mid-session; they get their real (possibly narrower) level
// on next login once the token is refreshed.
export const checkAccess = (...allowedLevels) => (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied: Admin only" });
  }
  const level = req.user.accessLevel || "overall";
  if (level === "overall" || allowedLevels.includes(level)) {
    return next();
  }
  return res.status(403).json({ message: "Access denied: insufficient access level" });
};
