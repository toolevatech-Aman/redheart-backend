import AddOn from "../models/addOn.js";

// Create new AddOn
export const createAddOn = async (req, res) => {
  try {
    const { image, category, name, costPrice, sellingPrice, originalPrice, addOn } = req.body;
    const newAddOn = new AddOn({ image, category, name, costPrice, sellingPrice, originalPrice, addOn });
    await newAddOn.save();
    res.status(201).json({ message: "AddOn created successfully", data: newAddOn });
  } catch (err) {
    res.status(500).json({ message: "Error creating AddOn", error: err.message });
  }
};

// Edit AddOn
export const editAddOn = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await AddOn.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "AddOn not found" });
    res.json({ message: "AddOn updated", data: updated });
  } catch (err) {
    res.status(500).json({ message: "Error updating AddOn", error: err.message });
  }
};

// Soft delete AddOn
export const softDeleteAddOn = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await AddOn.findByIdAndUpdate(id, { softDelete: true }, { new: true });
    if (!deleted) return res.status(404).json({ message: "AddOn not found" });
    res.json({ message: "AddOn soft deleted", data: deleted });
  } catch (err) {
    res.status(500).json({ message: "Error soft deleting AddOn", error: err.message });
  }
};

// Get all AddOns
export const getAllAddOns = async (req, res) => {
  try {
    // Fetch ALL addOns (softDelete true + false)
    const addOns = await AddOn.find();

    res.json(addOns);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching AddOns",
      error: err.message,
    });
  }
};


// Get AddOn by title
export const getAddOnByName = async (req, res) => {
  try {
    const { name } = req.params;
    const addOn = await AddOn.findOne({ name: name, softDelete: false });
    if (!addOn) return res.status(404).json({ message: "AddOn not found" });
    res.json(addOn);
  } catch (err) {
    res.status(500).json({ message: "Error fetching AddOn", error: err.message });
  }
};

// Get AddOns by category (public)
export const getAddOnsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const addOns = await AddOn.find({ category: category, softDelete: false });
    if (!addOns.length) return res.status(404).json({ message: "No AddOns found in this category" });
    res.json(addOns);
  } catch (err) {
    res.status(500).json({ message: "Error fetching AddOns by category", error: err.message });
  }
};
