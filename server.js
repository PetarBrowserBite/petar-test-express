const express = require("express");
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.get("/show", function (req, res) {
  res.send("Hello World!");
});

app.get("/", function (req, res) {
    res.send("Works test pipe line ! ");
  });

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
