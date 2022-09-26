//import the user schema
const user = require('../models/user');

//for sign-in page
module.exports.signIn = function(req, res){
          return res.render('user-sign-in',{
                    isAuthenticate : false
          });
}

//sign-up page
module.exports.signUp = function(req, res){
          return res.render('user-sign-up', {
                    isAuthenticate : false
          });
}

//add a new user or sign up 
module.exports.create = function(req, res){
          user.findOne({email: req.body.email}, function(err, docs){
                    if(err){
                              console.log('error in creating user',err);
                              return;
                    }
                    if(docs){
                              return res.redirect('../user/sign-in');
                    }

                    if(req.body.password != req.body.confirmPassword){
                              console.log('password mismatch');
                              return res.redirect('back');
                    }
                    user.create(req.body);
                    return res.redirect('../user/sign-in');
          });
}

//sign in 
module.exports.createSession = function(req, res){
          user.findOne({email:req.body.email}, function(err, user){
                    if(err){
                              console.log('error in sign in');
                              return res.redirect('back');
                    }
                    if(!user){
                              return res.redirect('back');
                    }
                    if(req.body.password != user.password){
                              return res.redirect('back');
                    }
                    res.cookie('user_Id', user.email);
                    return res.redirect('../');
          });
}

//for signout session
module.exports.destroySession = function(req, res){
          res.clearCookie('user_Id');
          return res.redirect('../user/sign-in');
}