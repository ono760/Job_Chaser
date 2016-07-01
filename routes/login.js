"use strict";
var express = require("express");
var router = express.Router();
var pg = require("pg");
var knex = require("../db/knex");
var bcrypt = require("bcrypt");

const USERS = function() {
  return knex('users');
};

router.use(function(req, res, next) {
  res.locals.err = null;
  next();
});

router.get('/', function(req, res){
  if (req.session.id){
    res.redirect(`/user/${req.session.id}`);
  } else {
    res.render('login', {user:req.session.user || null});
  }
});

router.post('/', function(req, res){
  knex('users').where({email:req.body.email}).first().then(function(userInfo) {
    if (userInfo && bcrypt.compareSync(req.body.password, userInfo.password)) {
      console.log(userInfo);
      console.log(userInfo.id);
      console.log(userInfo.first_name);
      req.session.user = {
        displayName:userInfo.first_name,
        id: userInfo.id
      };
      res.redirect('/');
    }
    else {

      res.render('login', {err:true});
    }
  });
});


module.exports = router;



// router.post('/', function(req, res){
//   knex('users').where('email', req.body.email).then(function(user){
//     if(user) {
//       if(bcrypt.compareSync(req.body.password, user[0].password)){
//         //set req.session.id equal to users.id in the users table
//         req.session.id = user[0].id;
//         res.redirect(`/users/${user[0].id}`);
//       } else {
//         res.render('login', {error: 'Email / Password do not match'});
//       }
//     } else {
//         res.render('login', {error: 'Email / Password do not match'});
//     }
//     res.redirect(`/user/${user[0].id}`);
//   });
// });
