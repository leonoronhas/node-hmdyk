const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
    },
    occupation: {
      type: String,
    },
  },
  { timestamps: true, minimize: false }
);

module.exports = mongoose.model('User', userSchema);
