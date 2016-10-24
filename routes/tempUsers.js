"use strict";

var express = require('express');
var router = express.Router();
var pg = require("pg");
var knex = require("../db/knex");
var bcrypt = require("bcrypt");
var bodyParser = require('body-parser');
router.use(bodyParser.json());

/* GET users listing. */

router.get('/', function(req, res, next) {
    res.render('tempUsers', { id: req.session.id });
}); //end of router.get


router.post('/', function(req, res, next) {
    console.log(req.body.reviews);
    console.log(req.body.questions);
    console.log(req.body.stage);
    console.log(req.body.notes);
    res.redirect('/tempUsers');
    res.end();

});


module.exports = router;
