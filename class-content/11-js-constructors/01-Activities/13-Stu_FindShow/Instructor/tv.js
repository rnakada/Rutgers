var axios = require('axios');

var TV = function() {
  this.findShow = function(show) {
    show = show.split(" ").join("+");
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    // console.log(show);
    // console.log(URL);
    axios.get(URL).then(function(response){
      // console.log(response.data);
      // * The name of the show
      console.log("Name: " + response.data.name);
      // * The show's genre(s)
      console.log("Genre: " + response.data.genres.join(", "));
      // * The show's average rating
      console.log("Rating: " + response.data.rating.average);
      // * The show's network name
      console.log("Network: " + response.data.network.name);
      // * The show's summary
      console.log("Summary: " + response.data.summary);
    });
  };
};

module.exports = TV;
