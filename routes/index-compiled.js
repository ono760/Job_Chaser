

"use strict";

var express = require('express');
var router = express.Router();
var pg = require("pg");
var knex = require("../db/knex");
var bcrypt = require("bcrypt");

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.user);
  res.render('index', { title: 'Job Search', currentQuery: {} });
});

module.exports = router;

//# sourceMappingURL=index-compiled.js.map