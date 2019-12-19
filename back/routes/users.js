// Libraries
const express = require("express");
const router = express.Router();

// @route   POST api/users
// @desc    Registers a user
// @access  Public
router.post("/", (req, res) => {
  res.send("Registers a user");
});

module.exports = router;
