var Home = {};

Home.index = function(req, res) {
  res.render('home', { user: req.user, title: 'Sup yo', layout:false });
};

module.exports = Home;
