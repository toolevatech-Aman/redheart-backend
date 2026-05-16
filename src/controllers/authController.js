import axios from "axios";
import { OAuth2Client } from "google-auth-library";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

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