var express = require("express");
var router = express.Router();
var Words = require("../models/words");
var mongoose = require("mongoose");

router.post("/", (req, res, next) => {
  let index = 0;
  const WordToDelete = {
    word: req.body.word,
    translate: req.body.translation,
  };

  const query = { lesson: req.body.lesson };

  Words.findOne(query, function (err, data) {
    console.log(data.words);
    data.words.map((item, id) => {
      if (
        item.word === req.body.word &&
        item.translate === req.body.translation
      ) {
        index = id;
      }
    });

    data.words.splice(index, 1);

    console.log(data.words);
    Words.findOneAndUpdate(query, { words: data.words }, function (err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send("Succesfully deleted.");
    });
  });
});

module.exports = router;
