const express = require('express');
const { Model } = require('mongoose');
const {Bill} = require("./model");
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

app.get("/bills",(req,res)=>{
    res.setHeader("Content-Type", "application/json");
    console.log("Getting Bills list");
    Bill.find({}, (err, bills) => {
        if (err != null) {
            res.status(500).json({
            error: err,
            message: "Could not list bills",
        });
        return;
    }
    res.status(200).json(bills);
});
});


module.exports = app;