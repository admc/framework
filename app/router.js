var express = require('express');
var passport = require('passport');
var router = express.Router();

//controllers
var Users = require('controllers/users')
var Home = require('controllers/home')

router.get('/', Home.index);
router.get('/user/login', Users.login);
router.post('/user/login', passport.authenticate('local', { failureRedirect: '/login' }), Users.loginAuth);
router.get('/user/logout', Users.logout);
router.get('/user/profile', require('connect-ensure-login').ensureLoggedIn(), Users.profile);

module.exports = router;
