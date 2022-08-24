const User = require("../models/user");

/**
 * Add New User
 *
 * Required Input:
 * - first_name
 * - last_name
 * - email
 * - occupation
 * Request type - Body
 * HTTP Method - POST
 * Path - /user/add-user
 */
const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(200).json({
      message: "Thank you, the user has been added!",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

/**
 * Retrieve User with id
 *
 * Required Input:
 * - id
 * Request type - query
 * HTTP Method - GET
 * Path - /user/USER_ID
 */
const retrieveUser = async (req, res) => {
  try {
    const user = await User.findOne(req.params.id);

    if (user) {
      res.status(200).json({
        message: "Thank you, user found.",
        user,
      });
    } else {
      res.status(404).json({
        message:
          "User not found or does not exist, please check id and try again.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

/**
 * Retrieve Users
 *
 * Required Input: none
 * Request type - none
 * HTTP Method - GET
 * Path - /users
 */
const retrieveUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 }).lean();

    if (users.length > 0) {
      res.status(200).json({
        message: `Thank you, ${users.length} users found.`,
        users,
      });
    } else {
      res.status(404).json({
        message: "No Users Found.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

/**
 * Update User
 *
 * Required Input: id
 * Request type - Body
 * HTTP Method - PUT
 * Path - /user
 */
const updateUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.body.id },
      {
        $set: {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          occupation: req.body.occupation,
        },
      },
      {
        new: true,
      }
    );

    if (user) {
      res.status(200).json({
        message: `Thank you, user updated.`,
        user,
      });
    } else {
      res.status(404).json({
        message: "Could not find user. Please try again.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

/**
 * Delete User
 *
 * Required Input: id
 * Request type - Body
 * HTTP Method - PUT
 * Path - /user
 */
const deleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndRemove({ _id: req.body.id });

    if (user) {
      res.status(404).json({
        message: "Could not find user. Please try again.",
      });
    } else {
      res.status(200).json({
        message: "User Deleted.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

module.exports = {
  addUser,
  retrieveUser,
  retrieveUsers,
  updateUser,
  deleteUser,
};
