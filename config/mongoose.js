//import mongoose
const mongoose = require('mongoose');

//connct to database
mongoose.connect('mongodb+srv://skbnsl:<bansal@sagar>@cluster0.prpxtu0.mongodb.net/?retryWrites=true&w=majorityss');


const db = mongoose.connection; 

//checking connection with database
db.on('error', console.error.bind(console,'error in connecting to database'));

db.once('open', function(){
          console.log('successfully connected to database --> mongoDB');
});

module.exports = db;