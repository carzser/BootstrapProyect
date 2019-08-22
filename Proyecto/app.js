/*var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var router = express.router();

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

function onRequest(request, response){
    console.log("A user made a request" + request.url);
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile('./index.html', null, function(error, data){
        if(error){
            response.writeHead(404);
            response.write("File not found.");
        }else{
            response.write(data);
        }
        response.end();
    });
}

http.createServer(onRequest).listen(3000);
console.log("Server is now running...");*/

var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname; // this folder should contain your html files.

app.use('/data_lib', express.static(__dirname + '/data_lib'));
app.use('/img', express.static(__dirname + '/img'));


router.get("/", function (req, res) {
  res.sendFile(path + "/index.html");
});

app.use("/", router);

app.listen(3000, function () {
  console.log("Live at Port 3000");
});
