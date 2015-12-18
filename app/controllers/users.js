var models  = require('../models');
//models.whatever.findAll

var Users = function () {};

Users.prototype.login = function(req, res) {
  res.render('login');
};

Users.prototype.logout =  function(req, res) {
  req.logout();
  res.redirect('/');
};

Users.prototype.profile = function(req, res) {
  res.render('profile', { user: req.user });
};

Users.prototype.loginAuth = function(req, res) {
  res.redirect('/');
};

exports.Users = Users;

