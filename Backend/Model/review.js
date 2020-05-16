// Blog Model Definition
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true},
    ReviewRating: { type: Number, required: true},
    createdBy: { type: String },
    createdAt: { type: Date, default: Date.now() },
    PostedFor :{type: mongoose.Schema.Types.ObjectId,ref:'movies', required: true } // poster for which movie
  });

  // Export Module/Schema
  module.exports = mongoose.model('Review', reviewSchema);
