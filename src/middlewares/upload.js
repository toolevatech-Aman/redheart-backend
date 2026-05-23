import multer from "multer";
import fs from "fs";
import path from "path";

// Use /tmp on Vercel (read-only FS), local uploads/ dir elsewhere
const uploadDir = process.env.VERCEL ? "/tmp/uploads" : "uploads";

// Create uploads folder if not exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = [
    "text/csv",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/octet-stream",
  ];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowed.includes(file.mimetype) || [".csv", ".xlsx", ".xls"].includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only .csv and .xlsx files are allowed."), false);
  }
};

export const upload = multer({ storage, fileFilter, limits: { fileSize: 20 * 1024 * 1024 } }); // 20 MB
