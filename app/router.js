var express = require('express');
var passport = require('passport');
var router = express.Router();
var auth = require('connect-ensure-login').ensureLoggedIn('/user/login');

//controllers
var home = require('./controllers/home');
var user = require('./controllers/user');
var thing = require('./controllers/thing');

//auth behavior
var redirectObj = { 
  successRedirect: '/'
  , failureRedirect: '/user/login'
};

router.get('/', auth, home.index);
router.get('/user/login', user.login);
router.post('/user/login', passport.authenticate('local', redirectObj), user.loginAuth);
router.get('/user/logout', user.logout);
router.get('/user/profile', auth, user.profile);

router.get('/things', auth, thing.all);

module.exports = router;
