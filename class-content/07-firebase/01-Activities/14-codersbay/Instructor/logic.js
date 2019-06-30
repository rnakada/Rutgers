// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyDkbPCxVE8jNwJD1_4z4dLejHs1onDOGec",
  authDomain: "day7-2-12-firebase.firebaseapp.com",
  databaseURL: "https://day7-2-12-firebase.firebaseio.com",
  projectId: "day7-2-12-firebase",
  storageBucket: "day7-2-12-firebase.appspot.com",
  messagingSenderId: "535003465297"
};
firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {
  console.log(snapshot.val());
  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("bidderName").exists() && snapshot.child("bidderPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    // highPrice = ...
    // highBidder = ...
    highBidder = snapshot.val().bidderName;
    highPrice = snapshot.val().bidderPrice;

    // Change the HTML to reflect the stored values
    $('#highest-bidder').text(highBidder);
    $('#highest-price').text(highPrice);

    // Print the data to the console.
    console.log({highPrice: highPrice});

  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $('#highest-bidder').text(initialBidder);
    $('#highest-price').text(initialBid);

    // Print the data to the console.
    console.log({
      initialBidder: initialBidder,
      initialBid: initialBid
    })

  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var bidderName = $('#bidder-name').val();
  var bidderPrice = $('#bidder-price').val();

  // Log the Bidder and Price (Even if not the highest)
  console.log({bidderName: bidderName, bidderPrice: bidderPrice });
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      bidderName: bidderName, 
      bidderPrice: bidderPrice 
    });


    // Store the new high price and bidder name as a local variable
    highPrice = bidderPrice;
    highBidder = bidderName;
    
    // Log the new High Price
    console.log({highPrice: highPrice});

    // Change the HTML to reflect the new high price and bidder
    $('#highest-bidder').text(highBidder);
    $('#highest-price').text(highPrice);
  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
