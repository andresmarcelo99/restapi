const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
//ROUTES

router.get("/", (req, res) => {
  res.send("We are on post");
});

console.log("1");

router.post("/", (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  post
    .save()
    .then((data) => {
      res.json(data);
      console.log(true);
    })
    .catch((err) => {
      res.json({ message: err });
    });

  console.log(req.body);
  //console.log(res);
});

module.exports = router;
