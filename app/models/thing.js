'use strict';
module.exports = function(sequelize, DataTypes) {
  var thing = sequelize.define('thing', {
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    extra: DataTypes.JSON
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return thing;
};
