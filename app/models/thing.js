'use strict';
module.exports = function(sequelize, DataTypes) {
  var thing = sequelize.define('thing', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return thing;
};