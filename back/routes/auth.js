// Libraries
const express = require("express");
const router = express.Router();

// @route   GET api/auth
// @desc    Get the current logged in user
// @access  Private
router.get("/", (req, res) => {
  res.send("Get the current logged in user");
});

// @route   POST api/auth
// @desc    Authenticate a user and get token
// @access  Private
router.post("/", (req, res) => {
  res.send("Authenticate a user and get token (Log in user)");
});

module.exports = router;
