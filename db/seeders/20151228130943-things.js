'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('things', [
        {
          name: 'Aangoon'
          , username: 'admin'
        }
        , {
          name: 'Kipnuk'
          , username: 'admin'
        }
        , {
          name: 'Kenaii'
          , username: 'admin'
        }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('things', null, {});
  }
};
