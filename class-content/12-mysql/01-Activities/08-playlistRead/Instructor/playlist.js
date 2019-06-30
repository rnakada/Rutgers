var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
    connection.query("SELECT id, title, artist, genre FROM songs", function (err, res){
        if(err) throw err;
        // console.log(res);
        for(var i = 0; i < res.length; i++){
            var keys = Object.keys(res[i]);
            var out = "";
            for(var j = 0; j < keys.length; j++){
                out += " | " + res[i][keys[j]];
            }
            console.log(out);
        }
        oneMore();
        // connection.end();
    });
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;
//     // console.log(res);
//     // for(var i = 0; i < res.length; i++){
//     //   console.log("<h2>" + res[i].flavor + "</h2>");
//     //   console.log("<p>" + res[i].price + "</p>");
//     // }
//     connection.end();
//   });
}

function oneMore(){
    var q = "Rock";
    console.log("-------");
 
        connection.query("SELECT id, title, art genre FROM songs WHERE '" + q + "' IN (genre, artist);", function (err, res){
            // try{
                if(err) throw err;
                for(var i = 0; i < res.length; i++){
                    var keys = Object.keys(res[i]);
                    var out = "";
                    for(var j = 0; j < keys.length; j++){
                        out += " | " + res[i][keys[j]];
                    }
                    console.log(out);
                }
            
            // }
            // catch(err){
            //     console.log(err);
            //     console.log("Still running");
            // }
            connection.end();
        });
    
}