// Blog Model Definition
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true},
    createdBy: { type: String },
    createdAt: { type: Date, default: Date.now() },
    likes: { type: Number, default: 0 },
    likedBy: { type: Array },
    dislikes: { type: Number, default: 0 },
    dislikedBy: { type: Array },
    comments: [{
      comment: { type: String },
      commentator: { type: String },
    }],
    PostedFor :{type: mongoose.Schema.Types.ObjectId,ref:'movies', required: true } // poster for which movie
  });
  
  // Export Module/Schema
  module.exports = mongoose.model('Blog', blogSchema);
  