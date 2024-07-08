/* NODE SERVER USING EXPRESS */
// Import the Express app from the backend app module
const app = require("./backend/app");
// Import the debug module, configured with the name "node-angular"
const debug = require("debug")("node-angular");
// Import the http module to create an HTTP server
const http = require("http");

/* ARROW FUNCTION: NORMALIZE PORT */
// Function to normalize a port into a number, string, or false
const normalizePort = (val) => {
  var port = parseInt(val, 10); // Parse the port value into an integer

  if (isNaN(port)) {
    // If the parsed value is not a number, return it as a named pipe
    return val;
  }

  if (port >= 0) {
    // If the port number is a valid positive number, return it
    return port;
  }

  // If the port number is invalid, return false
  return false;
};

/* ARROW FUNCTION: ERRORS WITH EXIT */
// Event listener for HTTP server "error" event
const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error; // Throw error if it is not related to listening
  }
  // Get the bind information based on whether the port is a pipe or number
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges"); // Handle permission errors
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use"); // Handle address in use errors
      process.exit(1);
      break;
    default:
      throw error; // Throw error for any other cases
  }
};

/* ARROW FUNCTION: LOG CURRENT LOCATION */
// Event listener for HTTP server "listening" event
const onListening = () => {
  const addr = server.address(); // Get server address information
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port; // Determine if the address is a pipe or port
  debug("Listening on " + bind); // Log the listening address using debug module
};

/* SET UP THE PORT in the Express App */
// Get the port from environment variables or default to 3000, then normalize it
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port); // Set the port for the Express app

/* SET UP THE NODE SERVER */
// Create an HTTP server using the Express app
const server = http.createServer(app);
// Add the error event handler to the server
server.on("error", onError);
// Add the listening event handler to the server
server.on("listening", onListening);
// Start the server and listen on the specified port
server.listen(port);
