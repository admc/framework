var crypto = require('crypto')
  , bcrypt = require('bcrypt')
  ;

exports.generateHash = function (cleartextPass) {
  var salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(cleartextPass, salt);
};

exports.compareHash = function(cleartextPass, hash) {
  return bcrypt.compareSync(cleartextPass, hash);
};
