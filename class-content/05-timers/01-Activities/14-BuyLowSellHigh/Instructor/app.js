
// Buy Low, Sell High -- Starter Code


// Stock Prices
var stockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1];


// Your Biggest Profit function
var biggestProfit = function(stockArray, sharesBought) {

// create highest difference and set it to 0
var highest = 0;
// for each sell price starting at 1 to the end of the array
for (var i = 1; i < stockArray.length; i++){
//   for each buy price from 0 to i -1 (lets call the index b)
    for( var b = 0; b <= i - 1; b++){
//      current difference is equal to arr[i] - arr[b]
        var current = stockArray[i] - stockArray[b];
//      compare it to the highest difference so far
//      if current > highest
        if( current > highest){
//           set highest to the current difference
            highest = current;
        }
    }

}
return highest * sharesBought;
};

// A Call to your Biggest Profit function.
console.log(biggestProfit(stockPrices, 10000));

// NOTE: This should return 7600,
// because you could have bought it at 1.14 per share
// and then sold it at 1.90 per share.
// 1.90 - 1.14 = 0.76. 0.76 * 10000 is 7600.

