'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [{
        firstName: 'Knarik',
        lastName: 'Manukyan',
        age: 18,
        email: 'demo@demo.com',
        gender: 'female',
        phone: '077283264',
        email: 'knarmanukyan23@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
