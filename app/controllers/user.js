var models  = require('../models');
//models.whatever.findAll

var User = {};

User.login = function(req, res) {
  res.render('login');
};

User.logout =  function(req, res) {
  req.logout();
  res.redirect('/');
};

User.profile = function(req, res) {
  res.render('profile', { user: req.user });
};

User.loginAuth = function(req, res) {
  res.redirect('/');
};

module.exports = User;
