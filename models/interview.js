
//require mongoose
const mongoose = require('mongoose');


const interviewSchema = new mongoose.Schema({
          companyName : {
                    type : String,
                    required : true
          },
          studentName : {
                    type : String,
                    required : true
          },
          result : {
                    type : String,
                    required : true
          },
          date : {
                    type : String,
                    required : true
          }
});

const Interview = mongoose.model('interviews',interviewSchema);

//export the interview schema
module.exports = Interview;