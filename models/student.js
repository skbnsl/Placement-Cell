const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
          name : {
                    type : String,
                    required : true
          },
          email : {
                    type : String,
                    required : true
          },
          college : {
                    type : String,
                    required : true
          },
          placementStatus : {
                    type : String,
                    required : true
          },
          batch : {
                    type : String,
                    required : true
          },
          dsa : {
                    type : Number,
                    required : true
          },
          webD : {
                    type : Number,
                    required : true
          },
          react : {
                    type : Number,
                    required : true
          }
});

const Student = mongoose.model('students',studentSchema);

//export the schema
module.exports = Student;