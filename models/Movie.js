const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  main_actor: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  released_date: {
    type: Date
  },
  producer: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Movie = mongoose.model('movie', MovieSchema);
