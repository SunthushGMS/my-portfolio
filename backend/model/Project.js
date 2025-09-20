const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    stack: [String],
    image: String,
    sourceFile: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
