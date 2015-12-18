'use strict';
var auth = require('../../app/helpers/auth');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username: 'admin'
      , firstname: 'Adam'
      , lastname: 'Admin'
      , email: 'adam@activecove.com'
      , password: auth.generateHash('testing')
      , createdAt: new Date()
      , updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
