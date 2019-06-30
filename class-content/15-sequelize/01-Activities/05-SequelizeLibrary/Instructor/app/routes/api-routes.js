// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Book = require("../models/book.js");
var Sequelize = require("sequelize");
// console.log(typeof Sequelize.Op);
var Op = Sequelize.Op;


// Routes
// =============================================================
module.exports = function(app) {

  // Add sequelize code to get all books and return them as JSON
  app.get("/api/all", function(req, res) {
    Book.findAll({})
    .then((result)=>{
      res.json(result);
    })
    .catch((error)=>{
      console.log(error);
    });
  });

  // Add sequelize code to get a specific book and return it as JSON
  app.get("/api/:book", function(req, res) {
    var bookSearched = req.params.book;
    Book.findAll({
      where: {
        title: bookSearched
      }
    })
    .then((result)=>{
      console.log(result);
      res.json(result);
    })
    .catch((error)=>{
      console.log(error);
      res.json(false);
    })
  });

  // Add sequelize code to get all books of a specific genre and return them as JSON
  app.get("/api/genre/:genre", function(req, res) {
    var genre = req.params.genre;
    Book.findAll({
      where: {
        genre: genre
      }
    })
    .then((result)=>{
      console.log(result);
      res.json(result);
    })
    .catch((error)=>{
      console.log(error);
      res.json(false);
    })
  });

  // Add sequelize code to get all books from a specific author and return them as JSON
  app.get("/api/author/:author", function(req, res) {
    var author = req.params.author;
    Book.findAll({
      where: {
        author: author
      }
    })
    .then((result)=>{
      console.log(result);
      res.json(result);
    })
    .catch((error)=>{
      console.log(error);
      res.json(false);
    })
  });

  // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
  app.get("/api/books/long", function(req, res) {
    console.log(Op);
    Book.findAll({
      where: {
        pages: {
          [Op.gt]: 150
        }
      }
    })
    .then((result)=>{
      console.log(result);
      res.json(result);
    })
    .catch((error)=>{
      console.log(error);
      res.json(false);
    })
  });

  // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
  app.get("/api/books/short", function(req, res) {
    console.log(Op);
    Book.findAll({
      where: {
        pages: {
          [Op.lte]: 150
        }
      }
    })
    .then((result)=>{
      console.log(result);
      res.json(result);
    })
    .catch((error)=>{
      console.log(error);
      res.json(false);
    })
  });

  // Add sequelize code to create a book
  app.post("/api/new", function(req, res) {
    var book = req.body;
    Book.create(book)
    .then((book)=>{
      console.log(book.dataValues);
      res.json(book.dataValues);
    })
    .catch((error)=>{
      console.log(error);
    })
    ;
  });

  // Add sequelize code to delete a book
  app.delete("/api/book/:id", function(req, res) {
    Book.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((result)=>{
      console.log(result);
      res.json(true);
    })
    .catch((error)=>{
      console.log(error);
      res.json(false);
    });
  });

};
