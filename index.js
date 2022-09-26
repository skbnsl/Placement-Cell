//require express
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
//import database
const db = require('./config/mongoose');
//import template engine
const expressLayouts = require('express-ejs-layouts');
//import cookie-parser
const cookieParser = require('cookie-parser');


app.use(express.urlencoded({extended:true}));

//using cookie-parser
app.use(cookieParser());

app.use(expressLayouts);

app.set('layout extractStyles', true);

//set ejs engine
app.set('view engine','ejs');
app.set('views', './views');

//using the routes index file
app.use('/', require('./routes/index'));

//checking the server
app.listen(port, function(err){
          if(err){console.log('error in server',err); return;}

          console.log('server is running on port',port);
})