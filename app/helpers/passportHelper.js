var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , models  = require('../models')
  , hash = require('./hash')
  ;

passport.use(new LocalStrategy(function (username, password, done) {
    models.user.findOne({ where: {username: username} }).then(function (user) {
      if (!user) { return done(null, false); }
      if (!hash.compareHash(password, user.password)) {
         return done(null, false);
      }

      //keep track of when users last logged in
      user.seen = new Date();
      user.save().then(function() {
        return done(null, user);
      })

    }, function(err) {
      return done(err);
    });
  }));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  models.user.findById(id).then(function (user) {
    cb(null, user);
  }, function(err) {
    if (err) { return cb(err); }
  });
});

module.exports = passport;
