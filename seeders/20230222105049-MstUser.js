'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('MstUser', [{
        fullname: "Administrator",
        username: "administrator",
        password: bcrypt.hashSync("admin1234", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullname: "rafly",
        username: "rafly",
        password: bcrypt.hashSync("12345678", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullname: "rafly 1",
        username: "rafly1",
        password: bcrypt.hashSync("12345678", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullname: "rafly 2",
        username: "rafly2",
        password: bcrypt.hashSync("12345678", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullname: "rafly 3",
        username: "rafly3",
        password: bcrypt.hashSync("12345678", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullname: "rafly 4",
        username: "rafly4",
        password: bcrypt.hashSync("12345678", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullname: "rafly 5",
        username: "rafly5",
        password: bcrypt.hashSync("12345678", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullname: "rafly 6",
        username: "rafly6",
        password: bcrypt.hashSync("12345678", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullname: "rafly 7",
        username: "rafly7",
        password: bcrypt.hashSync("12345678", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullname: "rafly 8",
        username: "rafly8",
        password: bcrypt.hashSync("12345678", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullname: "rafly 9",
        username: "rafly9",
        password: bcrypt.hashSync("12345678", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullname: "rafly 10",
        username: "rafly10",
        password: bcrypt.hashSync("12345678", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullname: "rafly 11",
        username: "rafly11",
        password: bcrypt.hashSync("12345678", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullname: "rafly 12",
        username: "rafly12",
        password: bcrypt.hashSync("12345678", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
