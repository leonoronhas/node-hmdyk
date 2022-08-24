const express = require("express");
const router = express.Router();

const userController = require("../../controllers/userController");

// POST -> /user/add-user
router.post("/add-user", userController.addUser);

// GET -> /user/:id
router.get("/user/:id", userController.retrieveUser);

// GET -> /users
router.get("/users", userController.retrieveUsers);

// PUT -> /user
router.put("/user", userController.updateUser);

// DELETE -> /user
router.delete("/user", userController.deleteUser);

module.exports = router;
