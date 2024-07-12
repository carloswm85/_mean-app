const mongoose = require("mongoose");

// #01 Schema Definition
const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

// #02 Modeling - Return a construction object, that will allow you
// to construct a new JS object
module.exports = mongoose.model('Post', postSchema)
// `'Post'` name will define the collection name `posts`

