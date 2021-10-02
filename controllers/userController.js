const User = require('../models/user');

/**
 * Create User
 * @author Leonardo Santos <dev.leo.santos@gmail.com>
 * @description Creates a new user
 *
 * @async
 *
 * @property {String} first_name User's first name
 * @property {String} last_name User's last name
 * @property {String} email User's email
 * @property {String} occupation User's occupation
 */
const addUser = async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();

    res.status(200).json({
      message: 'Thank you, the user has been added',
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

// Add your delete user controller here

module.exports = {
  addUser,
};
