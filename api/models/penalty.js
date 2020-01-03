const mongoose = require("mongoose");

const penaltySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
  value: { type: Number, required: true }
});

module.exports = mongoose.model("Penalty", penaltySchema);
