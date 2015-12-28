var models  = require('../models');
var thing = {};

thing.all = function(req, res) {
  models.thing.findAll({}).then(function(things) {
      if (!things) {
        res.json({});
      }
      else {
        res.json(things);
      }
  }, function(err) {
      res.json({err: err});
  })
};

module.exports = thing;
