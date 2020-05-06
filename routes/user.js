const express = require("express");
const router = express.Router();

//ROUTES

router.get("/", (req, res) => {
  res.send("We are on user");
});

router.get("/specific", (req, res) => {
  res.send("Specific user");
});

module.exports = router;
