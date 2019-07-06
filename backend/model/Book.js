const Sequelize = require('sequelize');
const sequelize = require('../model/connect');
const Model = Sequelize.Model;
class Book extends Model {}
Book.init({
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    author: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    max_page:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    publisher: {
        type: Sequelize.STRING,
        allowNull: false
    },
    asin:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'book',
    tableName: 'books'
  });

  module.exports = Book;