const express = require('express');
const router = express.Router();

const userController = require('../../controllers/userController');

const User = require('../../models/user');

// POST -> /user/add-user
router.post('/add-user', userController.addUser);

module.exports = router;
