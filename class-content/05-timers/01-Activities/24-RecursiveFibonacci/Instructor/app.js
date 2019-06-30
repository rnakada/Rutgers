var arr = [1,1];
var stop = 10;

console.log(fibs(arr, stop));
function fibs(arr, stop){
    if(arr.length >= stop){
        // make sure we stop
        return arr;
    }
    // console.log(arr[arr.length - 1] + arr[arr.length - 2]);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    // console.log(arr);
    return fibs(arr, stop);
}