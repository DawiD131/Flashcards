var express = require("express");
var router = express.Router();
var Words = require("../models/words");
var mongoose = require("mongoose");

router.get("/", function (req, res, next) {
  Words.find(function (err, data) {
    if (err) return res.send(500, { error: err });
    return res.send(data);
  });
});

module.exports = router;
