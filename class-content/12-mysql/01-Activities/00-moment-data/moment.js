var fs = require('fs');
// console.log(fs);

function findWordMoment(line){
    //console.log(line.join(' '));
    var chicken = /moment/;
    
    // searching for the word moment inside the line
    if(chicken.test(line)){
        console.log(line);
    }
}


var line = process.argv.slice(3);
if(process.argv[2] === 'line'){
    //console.log(line.join(' '));
    line = line.join(' ');
    findWordMoment(line);
}
//node moment.js file moment.txt
else if(process.argv[2] === 'file'){
    fs.readFile(process.argv[3], 'utf8', function(err, data){
        if(err){
            console.log(err);
        }
        // console.log(data);
        // splitting the file on the new line character
        var lines = data.split('\n');
        for(var i = 0; i < lines.length; i++){
            findWordMoment(lines[i]);
        }
    });
}

