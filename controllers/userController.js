const User = require('../models/user');

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
