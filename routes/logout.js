"use strict";
var express = require('express');
var router = express.Router();
var pg = require("pg");
var knex = require("../db/knex");
var bcrypt = require("bcrypt");
var cookieParser = require('cookie-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
    req.app.locals.user = null;
    res.redirect('/login')

});


module.exports = router;