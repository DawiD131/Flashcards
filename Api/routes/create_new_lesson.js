var express = require("express");
var router = express.Router();
var Words = require("../models/words");
var mongoose = require("mongoose");

router.post("/", (req, res) => {
  var word = new Words({
    lesson: req.body.lesson.trim(),
    words: [],
  });

  word.save(function (err) {
    res.end();
  });
});

module.exports = router;
