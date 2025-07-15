//add an http header:
/*var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("hello world");
    res.end();
  })
  .listen(8080);
  */
  /*The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).

This object has a property called "url" which holds the part of the url that comes after the domain name:*/ 
/*
var http=require("http");
http.createServer(function(req,res){
  res.writeHead(200,{'content-type':'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);
*/
/*There are built-in modules to easily split the query string into readable parts, such as the URL modul*/

var http=require("http");
var url=require("url");
http.createServer(function(req,res){
  res.writeHead(200,{'content-type':'text/html'});
  var q=url.parse(req.url,true).query;
  var txt=q.year+" "+q.month;
  res.write(txt);
  res.end();

}).listen(8080);