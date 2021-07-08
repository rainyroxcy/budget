const express = require('express');
const { Model } = require('mongoose');
const {Expense} = require("./model");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json({}));

app.use(express.static('static'));

app.use((req, res, next) => {
  console.log(
    "Time:",
    Date.now(),
    " - Method:",
    req.method,
    "-Path",
    req.originalUrl,
    "-Body: ",
    req.body
  );
  next();
});


module.exports = app;