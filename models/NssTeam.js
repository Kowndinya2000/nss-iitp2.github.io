const mongoose = require('mongoose');

mongoose.connect(
    process.env.CONNECTIONURL,
    {useNewUrlParser:true,useUnifiedTopology:true},
    (err)=>{
        if (err) throw err;
        console.log("connected to database cluster for NssTeam collection...")
    }
)

const NssTeamSchema = mongoose.Schema({
  Email: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  NssRole:{
    type: String,
    required: true
  }
});

module.exports = NssTeam = mongoose.model("NssTeam",NssTeamSchema,"NssTeam");