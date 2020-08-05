const mongoose = require('mongoose');

const ThoughtsandIdeasSchema = mongoose.Schema({
  Email: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  ThoughtorIdea:{
    type: String,
    required: true
  }
});

module.exports = ThoughtorIdea = mongoose.model("ThoughtsandIdeas",ThoughtsandIdeasSchema,"ThoughtsandIdeas");