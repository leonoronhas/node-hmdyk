const express = require("express");
const { countdown } = require("../helpers/helpers");
const routes = express.Router();

const userRoutes = require("./user");

routes.use("/user", userRoutes);

// Health check endpoint
routes.get("/", (req, res) => {
  const up = process.uptime();
  const time = countdown(Math.floor(up));

  const data = {
    uptime: time,
    message: "API Operational",
    status: 200,
    date: new Date(),
  };

  res.status(200).send(data);
});

module.exports = routes;
