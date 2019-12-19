// Libraries
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");

// @route   POST api/users
// @desc    Registers a user
// @access  Public
router.post(
  "/",
  [
    check("name", "Please include a name")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email address").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req); // Runs all of the checks specified above and sees if any of the passed variables in the request has any errors

    // If there are errors on the validation, send a 400 status, alongside the error
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // 400 - Bad request
    }

    res.send(req.body);
  }
);

module.exports = router;
