var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/linkedin',
  passport.authenticate('linkedin'),
  function(req, res){

  });

router.get('/linkedin/callback', passport.authenticate('linkedin', {
    successRedirect: '/jobs',
    failureRedirect: '/'
}));

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

module.exports=router;