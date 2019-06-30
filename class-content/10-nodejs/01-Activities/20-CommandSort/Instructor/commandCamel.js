//Write a commandline application that takes in arguments
//and writes them as camelcase.
//node commandCamel.js write me
// output: writeMe
//node commandCamel.js test this
// output: testThis
var arg = process.argv.slice(2);
// console.log(arg.join(''));
for(var i = 0; i < arg.length; i++){
    arg[i] = arg[i].toLowerCase();
    var letters = arg[i].split('');
    // cannot be the first word
    if(i != 0){
        letters[0] = letters[0].toUpperCase();
        arg[i] = letters.join('');
    }
    // console.log(letters);
}
console.log(arg.join(''));


