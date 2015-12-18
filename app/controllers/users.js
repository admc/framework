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
  console.log('loginAuth');
  res.redirect('/user/profile');
};

module.exports = User;
