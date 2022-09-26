const user = require('../models/user');

//for authentication using as middleware
module.exports.isAuthenticate = function(req, res, next){
     if(!req.cookies.user_Id){
          return res.redirect('../user/sign-in');
     }     
     user.findOne({email : req.cookies.user_Id}, function(err, user){
          if(err){
                    console.log('error while authentication');
                    return res.redirect('back');
          }
          if(!user){
                    return res.redirect('back');
          } 
          next();
     });
}