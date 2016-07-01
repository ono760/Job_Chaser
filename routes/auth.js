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
    req.session = null;
    res.render('index', { title: 'Job Search',
                        currentQuery: {},
                        user:null,
                        jobs: null,
                        page: null,
     				            totalPages:null,
                        totalResults:null
                      });
});

module.exports=router;
