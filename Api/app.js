var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");

var Words = require("./models/words");

var config = require("./config");

var get_lessons_with_words = require("./routes/get_lessons_with_words");
var update_word_status = require("./routes/update_word_status");
var delete_word = require("./routes/delete_word");
var delete_lesson = require("./routes/delete_lesson");
var get_words = require("./routes/get_words");
var save_word = require("./routes/save_word");
var create_new_lesson = require("./routes/create_new_lesson");
var get_lessons = require("./routes/get_lessons");

var router = express.Router();
var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect(config.db, { useNewUrlParser: true });

app.use("/get_lessons_with_words", get_lessons_with_words);
app.use("/update_word_status", update_word_status);
app.use("/get_words", get_words);
app.use("/delete_lesson", delete_lesson);
app.use("/delete_word", delete_word);
app.use("/save_word", save_word);
app.use("/create_new_lesson", create_new_lesson);
app.use("/get_lessons", get_lessons);

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
