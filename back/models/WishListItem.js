// Libraries
const mongoose = require("mongoose");

const WishListItemSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  isBought: {
    type: Boolean,
    default: false
  },
  link: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("listItem", WishListItemSchema);
