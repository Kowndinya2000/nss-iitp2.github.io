const mongoose = require('mongoose');

mongoose.connect(
    process.env.CONNECTIONURL,
    {useNewUrlParser:true,useUnifiedTopology:true},
    (err)=>{
        if (err) throw err;
        console.log("connected to database cluster for Events collection...")
    }
)

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

module.exports = Events = mongoose.model("Event",EventsSchema,"Events");