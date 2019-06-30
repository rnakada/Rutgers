var http = require('http');

var fs = require('fs');

var port = 8081;

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    console.log(req.url);
    // res.end("test");
    switch(req.url){
        case "/":
            sendSomething("/index.html", req, res);
            break;
        
        // case "/index.html":
        //     sendSomething("/index.html", req, res);
        //     break;
        // case "/favorite-css-frameworks.html":
        //     sendSomething("/favorite-css-frameworks.html", req, res);
        //     break;
        // case "/favorite-movies.html":
        //     sendSomething("/favorite-movies.html", req, res);
        //     break;
        // case "/favorite-foods.html":
        //     sendSomething("/favorite-foods.html", req, res);
        //     break;
        default:
            if(fs.existsSync(__dirname + "/pub" + req.url)){
                sendSomething(req.url, req, res);
            }
            else{
                send404page(req, res);
            }
            
            break;

    }
}
function send404page(req, res){
    var myHTML = "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for: " + req.url + " can not be found</p>" +
    "</body></html>";

  // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
  res.writeHead(404, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
}


function sendSomething(url, req, res){
    fs.readFile(__dirname + "/pub" + url, function(err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });

//   // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
//   res.writeHead(404, { "Content-Type": "text/html" });

//   // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
//   res.end(myHTML);
}
server.listen(port, function(err){
    if(err) throw err;
    console.log("Server listening at " + port);
})
