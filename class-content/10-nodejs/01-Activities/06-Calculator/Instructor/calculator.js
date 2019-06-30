// node calculator add 1 2

// console.log(process.argv);

// function add(){
//     var sum = parseFloat(process.argv[3]) + parseFloat(process.argv[4]);
//     console.log(sum);
// }

// if(process.argv[2] === 'add'){
//     add();
// }


// if(process.argv[2] === 'add'){
//     var sum = parseFloat(process.argv[3]) + parseFloat(process.argv[4]);
//     console.log(sum);
// }

var calc = {
    add: function(){
        return parseFloat(process.argv[3]) + parseFloat(process.argv[4]);
    },
    subtract: function(){
        return parseFloat(process.argv[3]) - parseFloat(process.argv[4]);
    },
    multiply: function(){
        return parseFloat(process.argv[3]) * parseFloat(process.argv[4]);
    },
    divide: function(){
        return parseFloat(process.argv[3]) / parseFloat(process.argv[4]);
    },
    remainder: function(){
        return parseFloat(process.argv[3]) % parseFloat(process.argv[4]);
    },
    exp: function(){
        return Math.pow(parseFloat(process.argv[3]), parseFloat(process.argv[4]));
    },
    algebra: function(){
        var coeff = parseFloat(process.argv[3]);
        var intercept = parseFloat(process.argv[3].split("+")[1]);
        var y = process.argv[3].split("=")[1];
        var x = (y - intercept) / coeff;
        return x;
        // console.log(process.argv[3]);
        // console.log(parseFloat(process.argv[3]));
        // console.log(parseInt(process.argv[3]));
        // console.log(process.argv[3].split("="));
        // console.log(process.argv[3].split("=")[1]);
        // console.log(process.argv[3].split("+"));
        // console.log(process.argv[3].split("+")[1]);
        // console.log(parseFloat(process.argv[3].split("+")[1]));
        // console.log(process.argv[3].split("x"));
        // return "";
    }
};
// console.log(calc);
// checks to see if we have that property or function
if(typeof calc[process.argv[2]] !== 'undefined'){
    // we do have that have that function, so we run it
    console.log(calc[process.argv[2]]());
}