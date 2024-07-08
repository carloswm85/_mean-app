/* EXPRESS APP */
const express = require("express");
const app = express();

// Use middleware
app.use((req, res, next) => {
  console.log("CONSOLE LOG: First middleware.");
  // Call the next middleware in the stack
  next();
});

// Use another middleware
app.use((req, res, next) => {
  // Send a response to the client
  res.send("TO CLIENT: Hello from express!");
});

// Export the Express app instance
module.exports = app;
