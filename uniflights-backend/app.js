const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


// ROUTES
console.log("APP START");

const authRoutes = require("./routes/authRoutes");
const flightRoutes = require("./routes/flightRoutes");
const bookingRoutes = require("./routes/bookingRoutes.js");

console.log("BOOKING IMPORT DONE");

app.use("/api/auth", authRoutes);
app.use("/api/flights", flightRoutes);
app.use("/api/bookings", bookingRoutes);


// TEST

app.get("/", (req, res) => {
  res.send("Backend running");
});


const PORT = 8000;

app.listen(PORT, () => {
  console.log("Server running on", PORT);
});