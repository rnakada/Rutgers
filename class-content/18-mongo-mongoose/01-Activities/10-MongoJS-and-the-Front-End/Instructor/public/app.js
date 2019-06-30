/* TODO:

  1. Make a reusable function for creating a table body in index.html with the results from your MongoDB query
  Each row should have info for one animal.

  2. Make two AJAX functions that fire when users click the two buttons on index.html.
      a. When the user clicks the Weight button, the table should display the animal data sorted by weight.
      b. When the user clicks the Name button, the table should display the animal data sorted by name.

  Good luck!

  *Hint*: We don't want to keep adding to the table with each button click. We only want to show the new results.
  What can we do to the table to accomplish this?

  *Bonus*: Write code to set an 'active' state on the column header. It should make the color sorted-by column red.
  *Bonus*: Add additional ways to sort (e.g. by class or number of legs)
*/

// var dataTest = [
//   {
//     name: "Anthony",
//     numLegs: 2,
//     class: "mammal",
//     weight: 200,
//     whatIWouldReallyCallIt: "Ynohtna"
//   }
// ];

// displayResults(dataTest);

// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in data (JSON) and creates a table body
function displayResults(data) {
  // Add to the table here...
  var tableBody = $('#results tbody');

  tableBody.empty();
  
  // loop through the array
  for(var i = 0; i < data.length; i++){
    // create the table row
    var tableRow = $("<tr>");
    // add each field to the row
    tableRow.append($("<td>").html(data[i].name));
    tableRow.append($("<td>").html(data[i].numLegs));
    tableRow.append($("<td>").html(data[i].class));
    tableRow.append($("<td>").html(data[i].weight));
    tableRow.append($("<td>").html(data[i].whatIWouldReallyCallIt));
    // append the row to the table body
    tableBody.append(tableRow);
  }
  // console.log(tableBody.get(0));

}

$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  displayResults(data);
});

$('#weight-sort').on('click', function(event){
  // event.preventDefault();
  $.getJSON("/weight", function(data){
    displayResults(data);
  });
});

$('#name-sort').on('click', function(event){
  // event.preventDefault();
  $.getJSON("/name", function(data){
    displayResults(data);
  });
});