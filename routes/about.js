var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res){
	console.log("HHHHH")
  res.render('about');
});


module.exports = router;
