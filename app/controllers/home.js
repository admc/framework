var Home = function () {};

Home.prototype.index = function(req, res) {
  res.render('home', { user: req.user });
};

exports.Home = Home;
