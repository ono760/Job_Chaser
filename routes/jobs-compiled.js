'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function (req, res, next) {
    let title = req.query.title;
    let location = req.query.location;
    request(`http://api.indeed.com/ads/apisearch?publisher=4710753624090411&q=${ title }&l=${ location }&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json`, function (err, response, data) {
        res.send(data);
    });
});

module.exports = router;

//# sourceMappingURL=jobs-compiled.js.map