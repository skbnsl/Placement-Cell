//import mongoose
const mongoose = require('mongoose');

//connct to database
mongoose.connect('mongodb+srv://skbnsl:Sagar321@celldb.hpog6di.mongodb.net/?retryWrites=true&w=majority');


const db = mongoose.connection; 

//checking connection with database
db.on('error', console.error.bind(console,'error in connecting to database'));

db.once('open', function(){
          console.log('successfully connected to database --> mongoDB');
});

module.exports = db;