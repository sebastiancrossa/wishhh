// Libraries
const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // Extract the token from header
  const token = req.header("x-auth-token");

  // Check if a token doesn't exist
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // If it does, verify it
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};
