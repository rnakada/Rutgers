

var htmlRoutes = (app, connection)=>{
    app.get("/", (req, res)=>{
        // console.log("html works");
        connection.query("SELECT * FROM movies", (err, results)=>{
            if(err) console.log(err);
            console.log(results);
            res.render("index", {
                title: "Maria",
                movies: results
            });
        });
        

    });
};

module.exports = htmlRoutes;