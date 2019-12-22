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
  type: {
    type: String,
    default: "bought"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("listItem", WishListItemSchema);
