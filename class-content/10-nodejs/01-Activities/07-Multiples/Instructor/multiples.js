console.log(process.argv[2]);
var num = parseFloat(process.argv[2]);
var sum = 0;

for(var i = 6; i < num; i = i + 6){
    // sum = sum + i;
    sum += i;
}
console.log(sum);

// i = 6;
// sum += i;
// i = 12;
// sum += i;
// console.log(sum);