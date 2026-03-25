const express = require("express");
const router = express.Router();

const airlines = [
  "Lufthansa",
  "Air India",
  "British Airways",
  "Emirates",
  "Qatar Airways",
  "KLM",
  "Air France"
];

const random = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

router.get("/search", (req, res) => {

  try {

    const {
      from = "BER",
      to = "LHR",
      departDate = "2025-01-01",
      returnDate = null,
      tripType = "oneway",
      passengers = 1,
      travelClass = "economy"
    } = req.query;

    const pass = Number(passengers) || 1;

    const flights = Array.from({ length: 6 }).map((_, i) => {

      let price = random(100, 500);

      if (travelClass === "business") price += 200;
      if (travelClass === "first") price += 400;

      price *= pass;

      price = Math.floor(price * 0.8); // student discount

      const airline =
        airlines[random(0, airlines.length - 1)];

      return {
        id: i + 1,
        airline,
        from,
        to,
        price,
        departDate,
        returnDate:
          tripType === "round" ? returnDate : null,
        passengers: pass,
        travelClass,

        deep_link:
          `https://www.google.com/flights?q=${from}+${to}+${departDate}`
      };

    });

    res.json({ flights });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Flight error"
    });

  }

});

module.exports = router;