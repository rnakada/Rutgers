

var apiRoutes = (app, connection)=>{
    app.post("/movies", (req, res)=>{
        var movieObj = req.body;
        var movie = movieObj.movie;
        console.log(movie);
        connection.query("INSERT INTO movies SET ?", 
        {
            movie: movie
        }, 
        (err, results)=>{
            console.log(results);
            if(err) console.log(err);
            // console.log(results);
            // res.end("" + results.insertId);
            res.render("movie-item", {
                layout: "ajax",
                id: results.insertId,
                movie: movie
            })
        });
    });

    app.delete("/movies/:id", (req, res)=>{
        connection.query("DELETE FROM movies WHERE ?", {
            id: req.params.id
        }, (err, results)=>{
            res.json(true);
        });
    });
};

module.exports = apiRoutes;