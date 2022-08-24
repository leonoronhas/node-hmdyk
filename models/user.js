const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "User",
  new Schema(
    {
      first_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        trim: true,
        lowercase: true,
      },
      occupation: {
        type: String,
        required: true,
      },
    },
    { timestamps: true, minimize: false }
  )
);
