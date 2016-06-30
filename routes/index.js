

"use strict";
var express = require('express');
var router = express.Router();
var pg = require("pg");
var knex = require("../db/knex");
var bcrypt = require("bcrypt");

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.session.user,'hi');
    console.log(req.session.passport,'bye');
    // var tempUser;
    // if (req.session.user) {
    //     tempUser = req.session.user;
    // }
    // if (req.session.passport.user) {
    //     tempUser = req.session.passport.user;
    // } else {
    //     tempUser = 'nik'
    // }
    // console.log('skdhalsd')

  res.render('index', { title: 'Job Search', 
                        currentQuery: {},
                        user:null,
                        jobs: null,
                        page: null,
      totalPages:null
                      });

});
// router.get('/', function(req, res){
//     console.log(req.session.passport.user);
//     res.render('signup',{user:req.session.passport.user});
// });


module.exports = router;
