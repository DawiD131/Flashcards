var express = require("express");
var router = express.Router();
var Words = require("../models/words");
var mongoose = require("mongoose");

router.get("/:lesson", function (req, res, next) {
  Words.findOne({ lesson: req.params.lesson }, function (err, data) {
    if (err) return res.send(500, { error: err });
    return res.send(JSON.stringify(data));
  });
});

module.exports = router;
