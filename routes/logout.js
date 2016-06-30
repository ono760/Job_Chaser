/**
 * Created by Nikhil on 6/29/16.
 */
"use strict";
var express = require('express');
var router = express.Router();
var pg = require("pg");
var knex = require("../db/knex");
var bcrypt = require("bcrypt");
var cookieParser = require('cookie-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Job Search',
    //     currentQuery: {},
    //     user:req.session.passport.user,
    //     jobs: null,
    //     page: null,
    //     totalPages:null
    // });
    res.redirect('/login')

});


// router.get('/', function(req, res){
//     console.log(req.session.passport.user);
//     res.render('signup',{user:req.session.passport.user});
// });


module.exports = router;