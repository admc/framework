'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('things', [
        {
          name: 'Aangoon'
          , createdAt: new Date()
          , updatedAt: new Date()
        }
        , {
          name: 'Kipnuk'
          , createdAt: new Date()
          , updatedAt: new Date()
        }
        , {
          name: 'Kenaii'
          , createdAt: new Date()
          , updatedAt: new Date()
        }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('things', null, {});
  }
};
