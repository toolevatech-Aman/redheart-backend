import axios from "axios";
import { OAuth2Client } from "google-auth-library";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";

// In-memory OTP store: email -> { otp, expiresAt }
const emailOtpStore = new Map();

const createMailTransport = () => {
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  // Gmail shorthand
  if (process.env.GMAIL_USER) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASS },
    });
  }
  return null;
};

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Helper
const generateToken = (user) => {
  return jwt.sign(
    { userId: user.userId, role: user.role }, 
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};


// ======================== SEND OTP ========================
export const sendOtp = async (req, res) => {
  try {
    let { phone } = req.body;

    if (!phone) return res.status(400).json({ message: "Phone is required" });

    // Normalize phone
    if (/^[6-9]\d{9}$/.test(phone)) phone = "+91" + phone;

    const url = `https://2factor.in/API/V1/${process.env.TWOFACTOR_API_KEY}/SMS/${encodeURIComponent(phone)}/AUTOGEN`;

    const response = await axios.get(url);

    if (response.data.Status !== "Success") {
      return res.status(500).json({
        message: "OTP sending failed",
        details: response.data,
      });
    }

    res.json({ sessionId: response.data.Details });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ======================== VERIFY OTP ========================
// export const verifyOtp = async (req, res) => {
//   try {
//     const { sessionId, otp, phone } = req.body;

//     if (!sessionId || !otp || !phone) {
//       return res
//         .status(400)
//         .json({ message: "sessionId, otp & phone required" });
//     }

//     let formattedPhone = phone;
//     if (/^[6-9]\d{9}$/.test(phone)) formattedPhone = "+91" + phone;

//     const url = `https://2factor.in/API/V1/${process.env.TWOFACTOR_API_KEY}/SMS/VERIFY/${sessionId}/${otp}`;

//     const response = await axios.get(url);

//     if (response.data.Status !== "Success") {
//       return res.status(400).json({ message: "OTP verification failed" });
//     }

//     // FIND OR CREATE USER
//     let user = await User.findOne({ phone: formattedPhone });

//     if (!user) {
//       user = await User.create({
//         userId: uuidv4(),
//         phone: formattedPhone,
//         isVerified: true,
//       });
//     } else {
//       user.isVerified = true;
//       await user.save();
//     }

//     const token = generateToken(user);

//     res.json({
//       message: "Login Successful",
//       token,
//       user,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: err.message });
//   }
// };
// export const verifyOtp = async (req, res) => {
//   try {
//     const { sessionId, otp, phone } = req.body;

//     if (!sessionId || !otp || !phone) {
//       return res
//         .status(400)
//         .json({ message: "sessionId, otp & phone required" });
//     }

//     let formattedPhone = phone;
//     if (/^[6-9]\d{9}$/.test(phone)) formattedPhone = "+91" + phone;

//     const url = `https://2factor.in/API/V1/${process.env.TWOFACTOR_API_KEY}/SMS/VERIFY/${sessionId}/${otp}`;
//     const response = await axios.get(url);

//     if (response.data.Status !== "Success") {
//       return res.status(400).json({ message: "OTP verification failed" });
//     }

//     // FIND OR CREATE USER
//     let user = await User.findOne({ phone: formattedPhone });

//     if (!user) {
//       user = await User.create({
//         userId: uuidv4(),
//         phone: formattedPhone,
//         isVerified: true,
//         role: "user", // default role
//         tokens: []    // initialize tokens array
//       });
//     } else {
//       user.isVerified = true;
//     }

//     // Generate token
//     const token = generateToken(user);

//     // Save token in DB
//     user.tokens = user.tokens || [];
//     user.tokens.push({ token, createdAt: new Date() });
//     await user.save();

//     res.json({
//       message: "Login Successful",
//       token,
//       user
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: err.message });
//   }
// };
export const verifyOtp = async (req, res) => {
  try {
    const { sessionId, otp, phone } = req.body;

    if (!sessionId || !otp || !phone) {
      return res
        .status(400)
        .json({ message: "sessionId, otp & phone required" });
    }

    let formattedPhone = phone;
    if (/^[6-9]\d{9}$/.test(phone)) formattedPhone = "+91" + phone;

    const url = `https://2factor.in/API/V1/${process.env.TWOFACTOR_API_KEY}/SMS/VERIFY/${sessionId}/${otp}`;
    const response = await axios.get(url);

    if (response.data.Status !== "Success") {
      return res.status(400).json({ message: "OTP verification failed" });
    }

    // FIND OR CREATE USER
    let user = await User.findOne({ phone: formattedPhone });

    if (!user) {
      // default coupons array
      const defaultCoupons = [
        {
          code: "NEW10",
          discountType: "percentage",
          discountValue: 10,
          minOrderValue: 599,
          isUsed: false
        },
        {
          code: "HAPPY100",
          discountType: "flat",
          discountValue: 100,
          minOrderValue: 1000,
          isUsed: false
        }
      ];

      user = await User.create({
        userId: uuidv4(),
        phone: formattedPhone,
        isVerified: true,
        role: "user",
        tokens: [],          // initialize tokens array
        coupons: defaultCoupons // add default coupons
      });
    } else {
      user.isVerified = true;
    }

    // Generate token
    const token = generateToken(user);

    // Save token in DB
    user.tokens = user.tokens || [];
    user.tokens.push({ token, createdAt: new Date() });
    await user.save();

    res.json({
      message: "Login Successful",
      token,
      user
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// ======================== GOOGLE AUTH ========================
export const googleAuth = async (req, res) => {
  try {
    const { credential } = req.body;
    if (!credential) return res.status(400).json({ message: "Google credential required" });

    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { sub: googleId, email, name, picture } = ticket.getPayload();

    let user = await User.findOne({ googleId });

    if (!user && email) user = await User.findOne({ email });

    if (!user) {
      const defaultCoupons = [
        { code: `NEW10`, discountType: "percentage", discountValue: 10, minOrderValue: 599, isUsed: false },
        { code: `HAPPY100`, discountType: "flat", discountValue: 100, minOrderValue: 1000, isUsed: false },
      ];
      user = await User.create({
        userId: uuidv4(),
        googleId,
        email,
        name,
        avatar: picture,
        isVerified: true,
        role: "user",
        tokens: [],
        coupons: defaultCoupons,
      });
    } else {
      user.googleId = user.googleId || googleId;
      user.email = user.email || email;
      user.name = user.name || name;
      user.avatar = user.avatar || picture;
      user.isVerified = true;
    }

    const token = generateToken(user);
    user.tokens = user.tokens || [];
    user.tokens.push({ token, createdAt: new Date() });
    await user.save();

    res.json({ message: "Login Successful", token, user });
  } catch (err) {
    console.error("Google auth error:", err);
    res.status(500).json({ error: err.message });
  }
};

// ======================== EMAIL OTP — SEND ========================
export const emailSendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ message: "Valid email required" });
    }
    const key = email.toLowerCase().trim();
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    emailOtpStore.set(key, { otp, expiresAt: Date.now() + 10 * 60 * 1000 });

    const transport = createMailTransport();
    if (transport) {
      await transport.sendMail({
        from: `"RedHeart" <${process.env.GMAIL_USER || process.env.SMTP_USER}>`,
        to: key,
        subject: `${otp} is your RedHeart login code`,
        html: `
          <div style="font-family:sans-serif;max-width:480px;margin:auto;padding:32px;border:1px solid #f0e0e0;border-radius:16px">
            <img src="https://www.redheart.in/logo.png" width="120" style="margin-bottom:24px"/>
            <h2 style="color:#c0392b;margin:0 0 8px">Your login code</h2>
            <p style="color:#666;margin:0 0 24px">Use this code to sign in to RedHeart. It expires in 10 minutes.</p>
            <div style="font-size:36px;font-weight:700;letter-spacing:8px;color:#c0392b;padding:16px;background:#fff5f5;border-radius:12px;text-align:center;margin-bottom:24px">${otp}</div>
            <p style="color:#999;font-size:12px">If you didn't request this, ignore this email.</p>
          </div>`,
      });
    } else {
      // Dev mode — log to console
      console.log(`[DEV] Email OTP for ${key}: ${otp}`);
    }

    res.json({
      message: "OTP sent",
      ...(process.env.NODE_ENV !== "production" && { _devOtp: otp }),
    });
  } catch (err) {
    console.error("emailSendOtp error:", err);
    res.status(500).json({ error: err.message });
  }
};

// ======================== EMAIL OTP — VERIFY ========================
export const emailVerifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ message: "Email and OTP required" });

    const key = email.toLowerCase().trim();
    const record = emailOtpStore.get(key);

    if (!record) return res.status(400).json({ message: "OTP not found. Please request a new one." });
    if (Date.now() > record.expiresAt) {
      emailOtpStore.delete(key);
      return res.status(400).json({ message: "OTP expired. Please request a new one." });
    }
    if (record.otp !== String(otp)) {
      return res.status(400).json({ message: "Invalid OTP. Please try again." });
    }

    // Do NOT delete the OTP yet — delete only after DB succeeds so the user
    // can retry if the database operation fails.
    let user = await User.findOne({ email: key });
    let isNewUser = false;

    if (!user) {
      isNewUser = true;
      user = await User.create({
        userId: uuidv4(),
        email: key,
        isVerified: true,
        role: "user",
        tokens: [],
        coupons: [],   // default coupons removed — coupon.code had a global unique
                       // index that caused E11000 for every 2nd+ new user
      });
    } else {
      user.isVerified = true;
    }

    const token = generateToken(user);
    user.tokens = user.tokens || [];
    user.tokens.push({ token, createdAt: new Date() });
    await user.save();

    // Only delete from OTP store after everything succeeded
    emailOtpStore.delete(key);

    res.json({ message: "Login Successful", token, user, isNewUser });
  } catch (err) {
    console.error("emailVerifyOtp error:", err);
    res.status(500).json({ error: err.message });
  }
};