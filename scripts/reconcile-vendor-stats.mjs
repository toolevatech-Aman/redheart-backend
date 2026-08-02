// One-off / manual CLI runner for the vendor stats reconciliation — the
// actual logic lives in src/utils/reconcileVendorStats.js (also used by the
// automatic daily job wired into server.js). Run this by hand any time the
// numbers look off: `node scripts/reconcile-vendor-stats.mjs`
import "dotenv/config";
import mongoose from "mongoose";
import { runVendorReconciliation } from "../src/utils/reconcileVendorStats.js";

await mongoose.connect(process.env.MONGO_URI);
const result = await runVendorReconciliation();
console.log(`Reconciled ${result.vendorsReconciled} vendors and ${result.pinCodesReconciled} pin codes from ${result.ordersScanned} orders.`);
process.exit(0);
