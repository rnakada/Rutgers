var express = require('express');
var exphbs = require('express-handlebars');

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'movies_planner_db'
});

connection.connect((err)=>{
    if(err) throw err;
    console.log("CONNECT WITH ID: " + connection.threadId);
});

var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var PORT = process.env.PORT || 8080;

require('./routes/api-routes.js')(app, connection);
require('./routes/html-routes.js')(app, connection);

app.listen(PORT, (err) => {
    if(err) throw error;
    console.log("Server is listening at http://localhost:" + PORT);
})