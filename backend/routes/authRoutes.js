const express = require("express");
const authRoutes = express.Router();
const User = require("../models/User");

authRoutes.post("/register", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  const user = new User({
    username,
    password
  });

  user.save().then(usr => {
    res.json({
      msg: "Success!",
      usr
    });
  });
});

authRoutes.post("/login", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  console.log(username, password);
  User.findOne({ username })
    .then(user => {
      res.json({
        msg: user.password === password ? "Login success" : "Login error"
      });
    })
    .catch(err => {
      console.log(err);
      res.json({
        msg: "Login error"
      });
    });
});

module.exports = authRoutes;
