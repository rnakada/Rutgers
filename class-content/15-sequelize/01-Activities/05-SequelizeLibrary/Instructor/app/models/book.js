// Dependencies
// =============================================================

// Require the sequelize library
var Sequelize = require("sequelize");

// Require the connection to the database (connection.js)
var sequelize = require("../config/connection.js");

// Create a "Book" model with the following configuration
const Book = sequelize.define("book", {
// 1. A title property of type STRING
    title: Sequelize.STRING,
// 2. An author property of type STRING
    author: Sequelize.STRING,
// 3. A genre property of type STRING
    genre: Sequelize.STRING,
// 4. A pages property of type INTEGER
    pages: Sequelize.INTEGER
});

// Sync model with DB
Book.sync();

// Export the book model for other files to use
module.exports = Book;