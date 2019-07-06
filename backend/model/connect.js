const Sequelize = require('sequelize');

const sequelize = new Sequelize('booklist', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;