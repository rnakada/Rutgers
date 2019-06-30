// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on order-data, waitinglist, etc.
// ===============================================================================



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  // we need a route to retrieve data about orders
  // /api/orders

  // we need a route that will retrieve data about the backorders
  // /api/waitlist

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the orderData array)
  // ---------------------------------------------------------------------------

  // /api/orders
    // Note the code here. Our "server" will respond to requests and let users know if their order is backordered.
    // It will do this by sending out the value "true" have a order
    // req.body is available since we're using the body parsing middleware
  

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the bakery data while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // // Empty out the arrays of data
    // orderData.length = [];
    // waitListData.length = [];

    // res.json({ ok: true });
  });
};
