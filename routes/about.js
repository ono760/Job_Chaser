var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res){
  var userID;
  if(req.session.user){
    userID = req.session.user.id;
  }
  res.render('about', {userID:userID||null});
});


module.exports = router;
