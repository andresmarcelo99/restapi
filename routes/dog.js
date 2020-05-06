const express = require("express");
const router = express.Router();

//Routes
router.get("/", (req, res) => {
  res.send("We are on a dog");
});

router.get("/specific", (req, res) => {
  res.send("Specific dog");
});

module.exports = router;
