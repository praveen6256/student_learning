const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  topics: [String],
  youtubeLinks: [String],
  jobs: [String]
});

module.exports = mongoose.model("Course", courseSchema);
