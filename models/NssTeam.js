const mongoose = require('mongoose');

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