'use strict';
var hash = require('../../app/helpers/hash');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      username: 'admin'
      , firstname: 'Adam'
      , lastname: 'Admin'
      , email: 'adam@activecove.com'
      , password: hash.generateHash('testing')
      , createdAt: new Date()
      , updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
