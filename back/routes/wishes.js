// Libraries
const express = require("express");
const router = express.Router();

// @route   GET api/wishes
// @desc    Get all items from users wish list
// @access  Private
router.get("/", (req, res) => {
  res.send("Get all items from users wish list");
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
