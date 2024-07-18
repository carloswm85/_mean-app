const express = require("express");

const Post = require("../models/post");

const router = express.Router();

// ===================================================================== GET ALL
router.get("", (req, res, next) => {
  Post.find().then((documents) => {
    // Respond with status 200 (OK) and send the posts as JSON
    res.status(200).json({
      message: "Posts fetched successfully from the MongoDB database!",
      posts: documents,
    });
  });
  // No need for next() as this is the last middleware in the chain for this route
});

// ===================================================================== GET ONE
router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id).then((post) => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  });
});

// ======================================================================== POST
router.post("", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  console.log(post);
  // POST
  // Mongoose will create the right quety for inserting the right query
  post.save().then((createdPostResult) => {
    // Respond with 201 status and success message
    res.status(201).json({
      message: "The new post was added successfully to the MongoDB database!",
      postId: createdPostResult._id,
    });
  });
});

// ========================================================================= PUT
router.put("/:id", (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
  });

  Post.updateOne({ _id: req.params.id }, post).then((result) => {
    console.log(result);
    res.status(200).json({ message: "Update successful!" });
  });
});

// ================================================================== DELETE ONE
router.delete("/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    // then also send the response
    res.status(200).json({ message: "Post deleted on server!" });
  });
});

module.exports = router;