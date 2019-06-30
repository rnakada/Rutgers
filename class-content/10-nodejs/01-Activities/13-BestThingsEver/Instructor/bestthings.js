var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function(err, data){
    if(err){
        console.log(err);
    }
    // console.log(data.split(','));
    var best_things_ever_array = data.split(',');
    for(var i = 0; i < best_things_ever_array.length; i++){
        console.log(best_things_ever_array[i]);
    }
});

// also valid
// fs.readFile("best_things_ever.txt", "utf8", (err, data) => {

// });