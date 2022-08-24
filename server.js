const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());

// Redirect to HTTPS to avoid privacy url warning
if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https")
      res.redirect(`https://${req.header("host")}${req.url}`);
    else next();
  });
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// For API call logs in terminal
app.use(logger("dev"));

const defaultRoute = require("./routes");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  );
  next();
});

app.use("/", defaultRoute);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Practice REST API PROD DB connected on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
