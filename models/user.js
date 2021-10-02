const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @typedef {User} UserSchema
 *
 * @property {String} first_name User's first name
 * @property {String} last_name User's last name
 * @property {String} email User's email address
 * @property {String} occupation User's occupation
 */
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
