const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://emdwlekr:TBVxY7PnrLhBmUoS@cluster0.wuba1f8.mongodb.net/?retryWrites=true&w=majority");
mongoose.Promise = global.Promise;

app.use(express.static("public"));

app.use(express.json());

// initialize routes
app.use("/api", require("./routes/api"));

// error handling middleware
app.use(function (err, req, res, next) {
  //console.log(err);
  res.status(422).send({ error: err.message });
});

// listen for requests
app.listen(process.env.port || 4000, function () {
  console.log("Ready to Go!");
});
