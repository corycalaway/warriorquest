// Dependencies
// =============================================================

// Require the sequelize library
const { Model, DataTypes } = require('sequelize');
// Require the connection to the database (connection.js)
const sequelize = require('../config/connection');

// Create a "Book" model with a title, author, genre, and pages
class Mod extends Model {}

Mod.init(
  {
    user: DataTypes.STRING,
    character_name: DataTypes.STRING,
    access_level: DataTypes.INTEGER
  },
  {
    sequelize
  }
);

// Export the book model for other files to use
module.exports = Mod;