const Lead = require("../models/lead");

// ===============================
// CREATE LEAD (CONTACT FORM)
// ===============================
exports.createLead = async (req, res) => {
  try {
    const { name, email, phone, source } = req.body;

    const lead = await Lead.create({
      name,
      email,
      phone,
      source
    });

    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ===============================
// GET ALL LEADS (ADMIN)
// ===============================
exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ===============================
// UPDATE LEAD STATUS
// ===============================
exports.updateLeadStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(lead);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ===============================
// UPDATE NOTES
// ===============================
exports.updateLeadNotes = async (req, res) => {
  try {
    const { notes } = req.body;

    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { notes },
      { new: true }
    );

    res.json(lead);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// ===============================
// DELETE LEAD
// ===============================
exports.deleteLead = async (req, res) => {
  await Lead.findByIdAndDelete(req.params.id);
  res.json({ message: "Lead deleted successfully" });
};

