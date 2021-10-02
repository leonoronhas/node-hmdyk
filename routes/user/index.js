const user = require('express').Router();

const userRoutes = require('./user');

user.use('/', userRoutes);

module.exports = user;
