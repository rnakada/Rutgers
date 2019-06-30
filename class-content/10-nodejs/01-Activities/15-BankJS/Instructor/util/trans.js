var fs = require("fs");

module.exports = {
    total: function(){
        fs.readFile("bank.txt", "utf8", function(err, data){
            if(err){
                console.log(err);
            }
            var transactions = data.split(',');
            var total = 0;
            for(var i = 0; i < transactions.length; i++){
                total += parseFloat(transactions[i].trim());
            }
            console.log(total);
        });
    },
    deposit: function(){
        var transaction = process.argv[3];
        //do deposit process here
        if(parseFloat(transaction) > 0){
            transaction = ", " + parseFloat(transaction);
            fs.appendFile("bank.txt", transaction, function(err){
                if(err){
                    console.log(err);
                }
            })
        }
    },
    withdraw: function(){
        var transaction = process.argv[3];
        //do withdraw process here
        if(parseFloat(transaction) > 0){
            transaction = ", " + (parseFloat(transaction) * -1);
            fs.appendFile("bank.txt", transaction, function(err){
                if(err){
                    console.log(err);
                }
            })
        }
    },
    lotto: function(){
        var lottoNum = Math.floor(Math.random() * 12);
        var userNum = Math.floor(Math.random() * 12);
        var transaction = "";
        if(lottoNum === userNum){
            // deposit 6,000,000
            transaction = ", 6000000";
            console.log("win");
        }
        else{
            //withdraw 1
            transaction = ", -1";
            console.log("lose");
        }
        fs.appendFile("bank.txt", transaction, function(err){
            if(err){
                console.log(err);
            }
        })
    }
}