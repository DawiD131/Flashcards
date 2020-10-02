var express = require("express");
var router = express.Router();
var Words = require("../models/words");
var mongoose = require("mongoose");

router.get("/:lesson", (req, res) => {
  const query = {
    lesson: req.params.lesson,
  };

  Words.findOneAndDelete(query, function (err, doc) {
    if (err) return res.send(500, { error: err });
    return res.send("Succesfully deleted.");
  });
});

module.exports = router;
