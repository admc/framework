var express = require('express');
var passport = require('passport');
var router = express.Router();
var auth = require('connect-ensure-login').ensureLoggedIn('/user/login');

//controllers
var User = require('./controllers/user')
var Home = require('./controllers/home')

//auth behavior
var redirectObj = { 
  successRedirect: '/'
  , failureRedirect: '/user/login'
};

router.get('/', auth, Home.index);
router.get('/user/login', User.login);
router.post('/user/login', passport.authenticate('local', redirectObj), User.loginAuth);
router.get('/user/logout', User.logout);
router.get('/user/profile', auth, User.profile);

module.exports = router;
