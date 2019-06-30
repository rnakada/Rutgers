var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// array of objects
var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2}
];

// html routes
app.get("/icecreams", (req, res)=> {
    res.render("index", {
        jasonTrain: icecreams
    });
});

app.get("/icecreams-alternate", (req, res)=> {
    res.render("index", {
        layout: "alternate",
        jasonTrain: icecreams
    });
});

app.get("/icecream/:name", (req, res) => {
    var name = req.params.name;
    // res.end(name);
    var icecream; // will contain object for an ice cream
    for(var i = 0; i < icecreams.length; i++){
        if(name === icecreams[i].name){
            icecream = icecreams[i];
        }
    }
    if(typeof icecream !== 'undefined' && icecream !== null){
        res.render("index", {
            jasonTrain: [icecream]
        });
    }
    else{
        res.render("icecreamerror", {
            icecreamName: name
        });
    }
});

app.get("/", function(req, res){
    res.end("We are up");
})

// app.listen... what?
app.listen(8080, function(){
    console.log("App is listening on http://localhost:8080");
});