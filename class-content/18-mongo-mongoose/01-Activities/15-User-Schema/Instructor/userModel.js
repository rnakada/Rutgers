var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  /* TODO:
   * Add four entries into our schema. These should be:
   *

   * 1: username: A string that will be be required, and also trimmed.
   * 2: password: A string that will be required, trimmed, and at least 6 characters.
   * 3: email: A string that must be a valid email address and unique in our collection.
   * 4: userCreated: A date that will default to the current date.
   *
   * TIP: The regex for checking if a string is an email is: /.+\@.+\..+/
   * Use that with the model attribute that checks for a valid match.
   * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */

  username: {
    type: String,
    required: "Username is required, what is wrong with you?",
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate: [
      function(input){
        if(input.length >= 6){
          return true;
        }
        return false;
      },
      "Password is not long enough dummy."
    ]
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/.+@.+\..+/, "This must be an email address."]
  },
  userCreated: {
    type: Date,
    default: Date.now
  }

});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
