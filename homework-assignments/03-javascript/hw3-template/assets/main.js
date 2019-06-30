// Let's start by grabbing a reference to the <span> below.
var userText = document.getElementById("user-text");

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
  console.log(event);
  userText.textContent = event.key;
  // userText.textContent = "anything";
};