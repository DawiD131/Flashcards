var express = require("express");
var router = express.Router();
var Words = require("../models/words");
var mongoose = require("mongoose");

router.post("/", (req, res, next) => {
  let newWord = {
    word: req.body.word,
    translate: req.body.translation,
  };

  const query = { lesson: req.body.lesson };
  console.log(req.body);

  Words.findOne(query, function (err, data) {
    data.words.map((item) => {
      if (req.body.word === item.word) {
        item.isLearned = req.body.isLearned;
      } else return item;
    });

    console.log(data.words);
    Words.findOneAndUpdate(query, { words: data.words }, function (err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send("Succesfully saved.");
    });
  });
});

module.exports = router;
