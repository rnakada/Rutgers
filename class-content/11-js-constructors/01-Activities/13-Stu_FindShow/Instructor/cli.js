// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

// console.log(process.argv);
// node cli show The Andy Griffith
// 0    1   2    3   4    5
var TvApi = require("./tv.js");
var tv = new TvApi();
var term = process.argv.slice(3).join(" ");
console.log(term);
if(process.argv[2] === "show"){
    console.log("Searching for show");
    tv.findShow(term);
}
if(process.argv[2] === "actor"){
    console.log("Searching for actor");
}