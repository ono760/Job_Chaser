//app setup
var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');

//middleware
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var request = require('request');
var expressSession = require('express-session');
var knex = require('./db/knex');

//passport
var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
require('dotenv').load();

//routes
var routes = require('./routes/index');
var users = require('./routes/users');
var auth = require('./routes/auth');
var jobs = require('./routes/jobs');
var login = require('./routes/login');
var signup = require('./routes/signup');

var tempUsers = require('./routes/tempUsers');
var about = require('./routes/about');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
console.log(__dirname);
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, '/public/images/favicomatic/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser('hi'));
app.use(cookieSession({
    name: 'session',
    keys: [
        process.env.SESSION_KEY1,
        process.env.SESSION_KEY2,
        process.env.SESSION_KEY3
    ]
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(expressSession({
    secret: 'secret here',
    resave: true,
    saveUninitialized: true
}));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(new LinkedInStrategy({
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: process.env.HOST + "/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_basicprofile'],
    state: true
}, function(accessToken, refreshToken, profile, done) {
    return done(null, { id: profile.id, displayName: profile.displayName, token: accessToken });
}));


app.use(function(req, res, next) {
    if (req.session.passport) app.locals.user = req.session.passport.user || null;
    else if (req.session.user) app.locals.user = req.session.user || null;
    else app.locals.user = null;
    next()
});

app.use('/', routes);
app.use('/auth', auth);
app.use('/login', login);

app.use('/users', users);
app.use('/jobs', jobs);
app.use('/signup', signup);
app.use('/tempUsers', tempUsers);
app.use('/about', about);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        throw err;
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function(err, req, res, next) {
    throw err;
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});


module.exports = app;
