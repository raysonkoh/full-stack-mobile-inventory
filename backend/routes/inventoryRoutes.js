const express = require("express");
const jwt = require("jsonwebtoken");
const secret = require("../configs").secret;
const inventoryRoutes = express.Router();
const User = require("../models/User");

inventoryRoutes.get("/:token", (req, res) => {
  const token = req.params.token;
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      res.json({
        err,
      });
    } else {
      res.json({
        inventory: decoded.user.inventory,
      });
    }
  });
});

module.exports = inventoryRoutes;
