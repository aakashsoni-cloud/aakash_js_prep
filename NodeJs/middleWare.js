// create middleware

const express = require("express");
const app = express();

const middleware = (req, res, next) => {
  console.log("I am middleware");
  next();
};


app.use(middleware);

