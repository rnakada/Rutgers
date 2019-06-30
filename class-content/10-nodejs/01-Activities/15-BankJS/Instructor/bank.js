var bank = require("./util/trans");

var command = process.argv[2];
// if we have the function defined
if(typeof bank[command] !== 'undefined'){
    bank[command]();
}


/*var fs = require("fs");

var command = process.argv[2];
var transaction = "";

if(command === "deposit"){
    //do deposit process here
    transaction = ", " + parseFloat(process.argv[3]);
    fs.appendFile("bank.txt", transaction, function(err){
        if(err){
            console.log(err);
        }
    })
}*/