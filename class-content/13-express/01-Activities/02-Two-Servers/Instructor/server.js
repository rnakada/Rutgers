var http = require("http");

var port = 7000;
var port_2 = 7500;

function handleRequest(request, response){
    response.end("Uhh Hello It's Me From " + request.url);
}

function handleRequest2(request, response){
    response.end("I'm an evil twin of Server 1");
}

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

server1.listen(port, function(){
    console.log("Server listening on http://localhost:" + port);
});

server2.listen(port_2, function(){
    console.log("Server listening on http://localhost:" + port_2);
});