"use strict";
var express = require('express');
var router = express.Router();
var pg = require("pg");
var knex = require("../db/knex");
var bcrypt = require("bcrypt");

/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('index', { title: 'Job Search', 
                        currentQuery: {},
                        jobs: null,
                        page: null,
                        totalPages:null
                      });
});

module.exports = router;
