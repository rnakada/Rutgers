// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  app.post("/api/tables", function(req, res){
    if(tableData.length < 5){
      tableData.push(req.body);
      // res.json(req.body);
      res.json(true);
    }
    else{
      waitListData.push(req.body);
      res.json(false);
    }
    // res.json(false);
  });
};
