'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    username: { 
      type: DataTypes.STRING
      , notEmpty: true
      , notNull: true
      , isLowercase: true
    }
    , password: {
      type: DataTypes.STRING
      , notEmpty: true
      , notNull: true
    }
    , email: {
      type: DataTypes.STRING
      , notEmpty: true
      , notNull: true
      , isEmail: true
    }
    , firstname: DataTypes.STRING
    , lastname: DataTypes.STRING
    , seen: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};
