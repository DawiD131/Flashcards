var express = require("express");
var router = express.Router();
var Words = require("../models/words");
var mongoose = require("mongoose");

router.post("/", (req, res, next) => {
  let newWord = {
    word: req.body.word,
    translate: req.body.translation,
    isLearned: req.body.isLearned,
  };

  const query = { lesson: req.body.lesson };

  Words.findOne(query, function (err, data) {
    data.words.push(newWord);

    console.log(data.words);
    Words.findOneAndUpdate(
      query,
      { words: data.words },
      { upsert: true },
      function (err, doc) {
        if (err) return res.send(500, { error: err });
        return res.send("Succesfully saved.");
      }
    );
  });
});

module.exports = router;
