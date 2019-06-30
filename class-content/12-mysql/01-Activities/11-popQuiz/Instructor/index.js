var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "quiz_db",
    port: 3306
});

connection.connect(function(err){
    if(err) throw err;
    console.log("connected as " + connection.threadId);
    printRows();
});

function printRows(){
    connection.query("SELECT * FROM question", function(err, rows){
        if(err) throw err;
        console.log(rows);
        connection.end();
    });
}
