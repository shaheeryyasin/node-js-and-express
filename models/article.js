let mongoose = require("mongoose");

let articlSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

let article = (module.exports = mongoose.model("article", articleSchema));
