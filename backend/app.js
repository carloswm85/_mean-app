/* GET ENVIRONMENT VARIABLES */
require("dotenv").config();
// That's it. `process.env` now has the keys and values you defined in your `.env` file
let PASSW = process.env.PASSWORD_MONGODB;

/* EXPRESS APP */
const express = require("express");
const bodyParser = require("body-parser"); // Import body-parser to parse incoming request bodies
const mongoose = require("mongoose");

// Models
const Post = require("./models/post");

// Create an instance of Express
const app = express();

/* Connection to Atlas MongoDB */
mongoose
  .connect(
    `mongodb+srv://carlos:${PASSW}@cluster0.cacrtoz.mongodb.net/meanApp`
  )
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

// Middleware to parse JSON-encoded bodies
app.use(bodyParser.json());
// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

/* CORS - Cross-Origin Resource Sharing */
// https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
// Middleware to handle CORS, which allows the server to accept requests from different origins
app.use((req, res, next) => {
  // Allow requests from any origin
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Allow specific headers in the requests
  res.setHeader(
    "Access-Control-Allow-Headers",
    /*
    Setting the Access-Control-Allow-Headers header to allow the following
    headers in CORS requests:
    - Origin: Indicates the origin (scheme, hostname, and port) of the request,
      helping the server identify where the request is coming from. For example,
      if a request is made from http://example.com to http://api.example.com,
      the Origin header will be http://example.com.
    - X-Requested-With: Commonly used to identify Ajax requests. It is often set
      to XMLHttpRequest to distinguish Ajax requests from ordinary browser
      requests. For instance, many JavaScript libraries (like jQuery) automatically
      set this header for Ajax requests to indicate their nature.
    - Content-Type: Specifies the media type (MIME type) of the resource or the
      data being sent in the request body. Examples include application/json for
      JSON data, text/html for HTML data, and application/x-www-form-urlencoded
      for form submissions. This header helps the server understand how to parse
      and process the request data.
    - Accept: Indicates the media types that the client is willing to receive
      from the server. For example, a client might set Accept: application/json
      to expect a JSON response or Accept: text/html to expect an HTML response.
      This header informs the server of the types of responses the client can
      handle, allowing the server to tailor its response accordingly.
    */
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  // Allow specific HTTP methods
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  // Pass the request to the next middleware in the stack
  next();
});

/* POST endpoint to create a new post */
app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  console.log(post);
  // POST
  // Mongoose will create the right quety for inserting the right query
  post.save();
  res.status(201).json({ message: "Post added successfully" }); // Respond with 201 status and success message
});

// Middleware to handle GET requests to the /api/posts route
app.get("/api/posts", (req, res, next) => {
  // Array of sample posts
  const posts = [
    {
      id: "thisId1",
      title: "First Server-Side Post",
      content: "This first content is coming from the server.",
    },
    {
      id: "thisId2",
      title: "Second Server-Side Post",
      content: "This second content is coming from the server.",
    },
    {
      id: "thisId3",
      title: "Third Server-Side Post",
      content: "This third content is coming from the server.",
    },
  ];
  // Respond with status 200 (OK) and send the posts as JSON
  res.status(200).json({ message: "Posts fetched!", posts: posts });
  // No need for next() as this is the last middleware in the chain for this route
});

// Export the Express app instance for use in other parts of the application
module.exports = app;
