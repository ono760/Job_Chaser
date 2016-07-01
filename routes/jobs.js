"use strict";
var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
    var userID
    if(req.session.user){
      userID = req.session.user.id;
    }
    let title = req.query.title;
    let location = req.query.location;
    let page = req.query.page || 1;
    let currentQuery = req.query;
    let offset = parseInt(page)*10;
    request(`http://api.indeed.com/ads/apisearch?publisher=4710753624090411&sort=&radius=&st=&jt=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json&q=${title}&l=${location}&start=${offset}`,function(err,data){
        let jobs = JSON.parse(data.body).results;
        let totalPages = Math.floor((JSON.parse(data.body).totalResults)/10);
        let totalResults = JSON.parse(data.body).totalResults
        console.log(JSON.parse(data.body).start, 'start');
        res.render('index', {err:err,
                            jobs:jobs,
                            currentQuery:currentQuery,
                            page:page,
                            totalPages:totalPages,
                            userID:userID||null,
                            totalResults:totalResults||null
                          });
    });
});

module.exports = router;
