const express = require("express");
const router = express.Router();

const protect = require("../middleware/middleware.js");

const {
  createLead,
  getLeads,
  updateLeadStatus,
  updateLeadNotes,
  deleteLead
} = require("../controllers/leadController");

// PUBLIC
router.post("/", createLead);

// ADMIN (protected)
router.get("/", protect, getLeads);
router.put("/:id", protect, updateLeadStatus);
router.put("/:id/notes", protect, updateLeadNotes);
router.delete("/:id", protect, deleteLead);


module.exports = router;
