const mongoose = require("mongoose");
const questionschema = new mongoose.Schema({
  question: {
    type: String,
  },

  options: [String],
  answer: {
    type: Number,
  },
});

const thwords = new mongoose.model("thwords", questionschema);
module.exports = thwords;
