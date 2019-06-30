var mysql = require("mysql");
var express = require("express");

var app = express();

var port = process.env.port || 8080;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "seinfeld"
});

connection.connect((err) =>{
    if(err) throw err;
    console.log("connected as " + connection.threadId);
});

// var poo = () => {
//     console.log("test");
// };if(err) throw err;

app.get("/cast", (req, res) => {

    connection.query("SELECT * FROM actors order by id", (err, result)=>{
        if(err) console.log(err);
        var html = "<h1>seinfeld actors</h1>";
        html += "<ul>";
        for(var i = 0; i < result.length; i++){
            html += "<li>";
            html += JSON.stringify(result[i]);
            html += "</li>";
        }
        html += "</ul>";
        res.send(html);
    });
});

app.listen(port, (err) =>{
    if(err) throw err;
    console.log("listening on http://localhost:" + port);
});