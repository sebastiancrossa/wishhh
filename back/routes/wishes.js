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
      date: -1,
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
  [auth, [check("name", "Product name is required").not().isEmpty()]],
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
        user: req.user.id,
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
router.put("/:id", auth, async (req, res) => {
  const { name, isBought, link } = req.body;

  // Building our new item object based on the passed params
  let itemFields = {};
  if (name) itemFields.name = name;
  if (isBought) itemFields.isBought = isBought;
  if (link) itemFields.link = link;

  try {
    let listItem = await ListItem.findById(req.params.id);

    if (!listItem)
      return res.status(404).json({ msg: "Error | Item not found" });

    // We make sure the item we are trying to update is from the logged in user
    if (listItem.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Error | Not authorized" });
    } else {
      listItem = await ListItem.findByIdAndUpdate(
        req.params.id,
        { $set: itemFields },
        { new: true }
      );

      res.json(listItem);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("500 | Server error");
  }
});

// @route   DELETE api/wishes/:id
// @desc    Delete an item from the users wish list
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let listItem = await ListItem.findById(req.params.id);

    if (!listItem)
      return res.status(404).json({ msg: "Error | Item not found" });

    if (listItem.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Error | Not authorized" });
    } else {
      await ListItem.findByIdAndDelete(req.params.id);
    }

    res.json({ msg: "Success! Item deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).send("500 | Server error");
  }
});

module.exports = router;
