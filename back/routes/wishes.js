// Libraries
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const ListItem = require("../models/WishListItem");

// @route   GET api/wishes
// @desc    Get all items from users wish list
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const listItems = await ListItem.find({ user: req.user.id }).sort({
      date: -1
    });

    res.json(listItems);
  } catch (error) {
    console.error(err);
    res.status(500).send("500 | Server error");
  }
});

// @route   POST api/wishes
// @desc    Add a new item to the wish list
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("name", "Product name is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    // Check if we have errors from the request body parameters
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, isBought, link } = req.body;

    try {
      const newListItem = new ListItem({
        name,
        isBought,
        link,
        user: req.user.id
      });

      const listItem = await newListItem.save();
      res.json(listItem);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("500 | Server error");
    }
  }
);

// @route   PUT api/wishes/:id
// @desc    Update an item from the users wish list
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Update an item from the users wish list");
});

// @route   DELETE api/wishes/:id
// @desc    Delete an item from the users wish list
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("Delete an item from the users wish list");
});

module.exports = router;
