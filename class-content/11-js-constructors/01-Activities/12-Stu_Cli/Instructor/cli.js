// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

// console.log(process.argv);
// node cli show The Andy Griffith
// 0    1   2    3   4    5
if(process.argv[2] === "show"){
    console.log("Searching for show");
}
if(process.argv[2] === "actor"){
    console.log("Searching for actor");
}
switch(process.argv[2]){
    case "show":
        console.log("Searching for show");
        break;
    case "actor":
        console.log("Searching for actor");
        break;
}
var command = {
    show: function(){
        console.log("Searching for show");
    },
    actor: function(){
        console.log("Searching for actor");
    }
};
if(typeof command[process.argv[2]] === 'function'){
    command[process.argv[2]]();
}
var term = process.argv.slice(3).join(" ");
console.log(term);