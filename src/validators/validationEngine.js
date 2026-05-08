// validationEngine.js
// Validates headers and every data row against a category schema.

import { CATEGORY_SCHEMAS } from "./categorySchemaEngine.js";

export class ValidationEngine {
  constructor(category) {
    this.schema = CATEGORY_SCHEMAS[category];
    if (!this.schema) throw new Error(`Unknown category: ${category}`);
    this.columns = this.schema.columns;
    this.mandatoryKeys = this.columns.filter(c => c.mandatory).map(c => c.key);
    this.allKeys = this.columns.map(c => c.key);
  }

  // ── Step 1: header check ─────────────────────────────────────────────────
  validateHeaders(fileHeaders) {
    const normalised = fileHeaders.map(h => h.trim().toLowerCase());
    const missing = this.mandatoryKeys.filter(k => !normalised.includes(k.toLowerCase()));
    const unknown = normalised.filter(h => !this.allKeys.map(k => k.toLowerCase()).includes(h));
    return {
      valid: missing.length === 0,
      missing,
      unknown,        // non-blocking: extra columns are just ignored
    };
  }

  // ── Step 2: row-level validation ─────────────────────────────────────────
  validateRows(rows) {
    const valid = [];
    const invalid = [];
    const skusSeen = new Set();

    rows.forEach((rawRow, idx) => {
      // Normalise keys to lowercase for lookup
      const row = {};
      for (const k of Object.keys(rawRow)) {
        row[k.trim().toLowerCase()] = rawRow[k];
      }
      const rowNum = idx + 2; // +2: row 1 = header
      const errors = [];

      for (const col of this.columns) {
        const key   = col.key.toLowerCase();
        const value = row[key];
        const empty = value === undefined || value === null || String(value).trim() === "";

        // Required check
        if (col.mandatory && empty) {
          errors.push({ field: col.key, message: `"${col.key}" is required` });
          continue;
        }
        if (empty) continue;

        const val = String(value).trim();

        // Type checks
        if (col.type === "number") {
          const num = Number(val);
          if (isNaN(num))                                errors.push({ field: col.key, message: `"${col.key}" must be a number, got "${val}"` });
          else if (col.min !== undefined && num < col.min) errors.push({ field: col.key, message: `"${col.key}" must be ≥ ${col.min}` });
          else if (col.max !== undefined && num > col.max) errors.push({ field: col.key, message: `"${col.key}" must be ≤ ${col.max}` });
        }

        if (col.type === "boolean") {
          if (!["true","false","1","0"].includes(val.toLowerCase()))
            errors.push({ field: col.key, message: `"${col.key}" must be TRUE or FALSE` });
        }

        if (col.type === "enum") {
          if (!col.allowedValues.includes(val))
            errors.push({ field: col.key, message: `"${col.key}" invalid value "${val}". Allowed: ${col.allowedValues.join(", ")}` });
        }

        if (col.type === "array" && col.allowedValues) {
          const items = val.split(col.separator || "|").map(v => v.trim()).filter(Boolean);
          const bad = items.filter(i => !col.allowedValues.includes(i));
          if (bad.length) errors.push({ field: col.key, message: `"${col.key}" invalid values: ${bad.join(", ")}` });
        }

        if (col.type === "url") {
          if (!/^https?:\/\/.+/.test(val))
            errors.push({ field: col.key, message: `"${col.key}" must be a valid https:// URL` });
        }

        if (col.type === "string" && col.maxLength && val.length > col.maxLength) {
          errors.push({ field: col.key, message: `"${col.key}" exceeds ${col.maxLength} characters (${val.length})` });
        }

        if (col.pattern && !col.pattern.test(val)) {
          errors.push({ field: col.key, message: `"${col.key}" format invalid. ${col.note}` });
        }
      }

      // Duplicate SKU check within this file
      const sku = String(row["sku"] || "").trim();
      if (sku) {
        if (skusSeen.has(sku.toUpperCase()))
          errors.push({ field: "sku", message: `Duplicate SKU "${sku}" in this file` });
        else
          skusSeen.add(sku.toUpperCase());
      }

      if (errors.length === 0) {
        valid.push({ rowNum, data: row });
      } else {
        invalid.push({ rowNum, data: row, errors });
      }
    });

    return {
      valid,
      invalid,
      summary: {
        total:    rows.length,
        valid:    valid.length,
        invalid:  invalid.length,
        passRate: rows.length ? `${Math.round((valid.length / rows.length) * 100)}%` : "0%",
      },
    };
  }
}
