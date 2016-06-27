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
  res.render('signup');
});

router.post('/', function(req, res){
  console.log('foo');
  USERS().where({email:req.body.email})
  .first().then(function(user){
    if(!user) {
      var hash = bcrypt.hashSync(req.body.password, 8);
      knex('users').insert({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        password: hash,
        phone_number: req.body.phone
      }).returning('*').then(function(newUser) {
        res.redirect(`/user/${newUser[0].id}`);
      });
    } else {
      res.send('Email already exists');
    }
  }).catch(function(err) {
    res.send("Error signing up " + err);
  });
});

module.exports = router;
