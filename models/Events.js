const mongoose = require('mongoose');

const EventsSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  EventClass: {
    type: String,
    required: true
  },
  StartTime:{
    type: Date,
    required: true
  },
  Location:{
      type: String,
      required: true
  },
  Description:{
      type: String,
      required: true
  },
  ListofCoordinators:{
      type: [String],
      required: true
  },
  SponserId:{
      type: String,
  }
});

module.exports = Event = mongoose.model("Event",EventsSchema,"Events");