// Libraries
const express = require("express");
const connectDb = require("./config/db");
const cors = require("cors");

// Initialization
const app = express();
const PORT = process.env.PORT || 5000;

connectDb(); // Connects to our MongoDb database

// Middleware
app.use(express.json({ extended: false })); // This will let us pass data to the body of our requests
app.use(cors());

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
