// Libraries
const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const { check, validationResult } = require("express-validator");

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
  async (req, res) => {
    const errors = validationResult(req); // Runs all of the checks specified above and sees if any of the passed variables in the request has any errors

    // If there are errors on the validation, send a 400 status, alongside the error
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // 400 - Bad request
    }

    const { name, email, password } = req.body;

    try {
      // Check if a user already exitst with the passed email
      let user = await User.findOne({ email });

      if (user) {
        res
          .status(400)
          .json({ msg: "A user already exists with the passed email" });
      } else {
        // Create a new instance of the user with the passed data
        user = new User({
          name,
          email,
          password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save(); // Saves the new user to our mongo database

        // --- Creating and handling our JWT --- //
        const payload = {
          user: {
            id: user.id
          }
        };

        jwt.sign(
          payload,
          config.get("jwtSecret"),
          {
            expiresIn: 360000
          },
          (err, token) => {
            if (err) throw err;

            res.json({ token });
          }
        );
        // --- --- //
      }
    } catch (err) {
      console.error(err.message);

      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
