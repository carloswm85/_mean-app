/* NODE SERVER */
// Import the 'http' module to create an HTTP server
const http = require("http");
// Import the Express application from the backend/app module
const app = require("./backend/app");

// Define the port number the server will listen on. Use the value from the
// environment variable PORT if available, otherwise default to 3000.
const port = process.env.PORT || 3000;

/*
// Basic NODE only server creation
// Create a simple HTTP server without using Express.
const server = http.createServer((req, res) => {
  console.log(process.env.PORT);
  // Send a simple response to any incoming request
  res.end("This is my first response");
});
*/

// Set the port for the Express app
app.set("port", port);
// Create an HTTP server that uses the Express app to handle requests
const server = http.createServer(app);

// Start the server and have it listen on the specified port
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
