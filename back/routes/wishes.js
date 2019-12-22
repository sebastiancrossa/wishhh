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
router.post("/", (req, res) => {
  res.send("Add a new item to the wish list");
});

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
