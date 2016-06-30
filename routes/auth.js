var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/linkedin',
  passport.authenticate('linkedin'),
  function(req, res){
  });

router.get('/linkedin/callback', passport.authenticate('linkedin', {
    successRedirect: '/jobs',
    failureRedirect: '/login'
}));

router.get('/logout', function(req, res){
    req.logout();
    res.clearCookie();

    req.session.user = null;
    console.log(req.session);
      res.render('index', { title: 'Job Search', 
                        currentQuery: {},
                        user:null,
                        jobs: null,
                        page: null,
     				    totalPages:null
                      });
});

module.exports=router;