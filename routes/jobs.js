/**
 * Created by Nikhil on 6/27/16.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/jobs', function(req, res, next) {
    res.render('index', { title: 'Job Search' });
});

module.exports = router;