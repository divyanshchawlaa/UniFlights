const express = require("express");
const router = express.Router();

console.log("BOOKING ROUTES LOADED NEW FILE");

let savedFlights = [];

router.get("/all", (req, res) => {
  console.log("GET ALL HIT");
  res.json(savedFlights);
});

router.post("/save", (req, res) => {
  console.log("SAVE HIT");

  savedFlights.push(req.body);

  res.json({
    message: "Saved",
    data: req.body
  });
});

module.exports = router;