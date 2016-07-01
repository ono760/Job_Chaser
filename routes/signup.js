"use strict";
var express = require("express");
var router = express.Router();
var pg = require("pg");
var knex = require("../db/knex");
var bcrypt = require("bcrypt");

const USERS = function() {
  return knex('users');
};

router.get('/', function(req, res){
  res.render('signup',{err:false});
});

// router.post('/', function(req, res){
  router.post('/', function(req, res){
  USERS().where({email:req.body.email}).first().then(function(user){
    if(!user) {
      var hash = bcrypt.hashSync(req.body.password, 8);
      knex('users').insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_number: req.body.phone_number,
        password: hash,
        email: req.body.email
      // }).returning('*').then(function(newUser) {
      }).then(function() {
        // res.redirect(`/user/${newUser[0].id}`);
        res.redirect('/login');
      });
    } else {
      // res.render('signup', {err:false})
      res.render('signup', {err:true});
    }
  })
  // .catch(function(err) {
  //   res.send("Error signing up " + err);
  // });
});

module.exports = router;
