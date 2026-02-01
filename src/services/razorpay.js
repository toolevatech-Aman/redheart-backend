import Razorpay from "razorpay";
import ConfidentialKey from "../models/confidentialKeys.js";


export const getRazorpayInstance = async () => {
  const keys = await ConfidentialKey.find({
    key: { $in: ["RAZORPAY_KEY_ID", "RAZORPAY_KEY_SECRET"] },
  });

  const keyMap = {};
  keys.forEach(k => (keyMap[k.key] = k.value));

  if (!keyMap.RAZORPAY_KEY_ID || !keyMap.RAZORPAY_KEY_SECRET) {
    throw new Error("Razorpay keys not configured");
  }

  return new Razorpay({
    key_id: keyMap.RAZORPAY_KEY_ID,
    key_secret: keyMap.RAZORPAY_KEY_SECRET,
  });
};
