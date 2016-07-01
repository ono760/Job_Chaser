"use strict";
var express = require('express');
var router = express.Router();
var pg = require("pg");
var knex = require("../db/knex");
var bcrypt = require("bcrypt");

/* GET home page. */
router.get('/', function(req, res, next) {
  var userID;
  if(req.session.user){
    userID = req.session.user.id;
  }
  res.render('index', { title: 'Job Search',
                        currentQuery: {},
                        jobs: null,
                        page: null,
                        totalPages:null,
                        totalResults:null,
                        userID:userID||null
                      });
});

module.exports = router;
