const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: { type: String },
  description: { type: String },
  isCompleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("Todo", TodoSchema);
