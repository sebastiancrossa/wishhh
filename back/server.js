// Libraries
const express = require("express");

// Initialization
const app = express();
const PORT = process.env.PORT || 5000;

// Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/wishes", require("./routes/wishes"));
app.use("/api/auth", require("./routes/auth"));

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to Wishhh"
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
