const mongoose = require("mongoose");

const { Schema } = mongoose;

const powerSchema = new Schema({
  powerName: {
    type: String,
    trim: true,
  },
  powerLevel: {
    type: Number,
  },
});

const Power = mongoose.model("Power", powerSchema);

module.exports = Power;