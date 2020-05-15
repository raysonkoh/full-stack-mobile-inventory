const express = require("express");
const jwt = require("jsonwebtoken");
const secret = require("../configs").secret;
const authRoutes = express.Router();
const User = require("../models/User");

authRoutes.post("/register", (req, res) => {
  const { username, password } = req.body;
  const user = new User({
    username,
    password,
    inventory: [],
  });

  user
    .save()
    .then((usr) => {
      res.json({
        msg: "Success!",
        usr,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        err,
      });
    });
});

authRoutes.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .then((user) => {
      if (user.password === password) {
        jwt.sign(
          {
            user: {
              id: user._id,
              username: user.username,
            },
          },
          secret,
          (err, token) => {
            if (err) {
              console.log(err);
              res.json({
                err,
              });
            } else {
              res.json({
                msg: "Login success",
                token,
              });
            }
          }
        );
      } else {
        res.json({
          err: "Login error",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.json({
        err: "Login error",
      });
    });
});

module.exports = authRoutes;
