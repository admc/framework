var models  = require('../models');
var user = {};

user.login = function(req, res) {
  res.render('login');
};

user.logout =  function(req, res) {
  req.logout();
  res.redirect('/');
};

user.profile = function(req, res) {
  res.render('profile', { user: req.user });
};

user.loginAuth = function(req, res) {
  res.redirect('/');
};

module.exports = user;
