const mongoose = require('mongoose');

mongoose.connect(
    process.env.CONNECTIONURL,
    {useNewUrlParser:true,useUnifiedTopology:true},
    (err)=>{
        if (err) throw err;
        console.log("connected to database cluster for ThoughtsandIdeas collection...")
    }
)

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

module.exports = ThoughtsandIdeas = mongoose.model("ThoughtsandIdeas",ThoughtsandIdeasSchema,"ThoughtsandIdeas");