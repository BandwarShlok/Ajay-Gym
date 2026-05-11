const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* MIDDLEWARE */

app.use(cors());
app.use(express.json());

/* MONGODB CONNECTION */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

/* CONTACT SCHEMA */

const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

/* TEST ROUTE */

app.get("/", (req, res) => {
  res.send("Server Running");
});

/* CONTACT ROUTE */

app.post("/contact", async (req, res) => {
  try {
    const { name, phone, message } = req.body;

    const newMessage = new Contact({
      name,
      phone,
      message,
    });

    await newMessage.save();

    res.status(201).json({
      success: true,
      message: "Message Saved",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

/* SERVER */

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});