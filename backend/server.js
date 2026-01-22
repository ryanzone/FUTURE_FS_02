const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("Mongo error:", err));

app.get("/", (req, res) => {
  res.send("Mini CRM backend running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

const Lead = require("./models/lead");

app.get("/test-lead", async (req, res) => {
  const lead = await Lead.create({
    name: "Test User",
    email: "test@gmail.com",
    phone: "9999999999",
    source: "Test"
  });

  res.json(lead);
});
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/leads", require("./routes/leadRoutes"));
