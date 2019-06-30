// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/all-chirps", (req, res) =>{
    connection.query("SELECT * FROM chirps", (err, result)=>{
      if(err) console.log(err);
      res.json(result);
    });
    // connection.query("SELECT id, author, chirp, time_created FROM chirps", (err, data)=>{

    // });
  });


  // Add a chirp
  app.post("/chirp", (req, res) => {
    var author = req.body.author;
    var chirp = req.body.chirp;
    connection.query(
      "INSERT chirps SET author = ?, chirp = ?, time_created = current_timestamp()", 
      [
        author,
        chirp
      ], 
      (err, result)=>{
        if(err){
          console.log(err);
          res.json(false);
        };
        console.log(result);
        res.json(true);
    });
  });

};
