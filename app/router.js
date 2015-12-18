var express = require('express');
var passport = require('passport');
var router = express.Router();
var auth = require('connect-ensure-login').ensureLoggedIn('/user/login');

//controllers
var User = require('./controllers/user')
var Home = require('./controllers/home')

router.get('/', Home.index);
router.get('/user/login', User.login);
router.post('/user/login', passport.authenticate('local', { failureRedirect: '/user/login' }), User.loginAuth);
router.get('/user/logout', User.logout);
router.get('/user/profile', auth, User.profile);

module.exports = router;
