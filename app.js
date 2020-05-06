const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");

require("dotenv/config");

//app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//import routes
const postRoute = require("./routes/posts.js");
const userRoute = require("./routes/user.js");
const dogRoute = require("./routes/dog.js");

app.use("/posts", postRoute);
app.use("/user", userRoute);
app.use("/dog", dogRoute);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected to db");
});

app.listen(3000);
