
const fs = require("fs");
/*
fs.writeFile("mymessge2.txt","hello world!",(err) =>{
    if(err) throw err;
    console.log("your message named mymessage2.txt has been saved");
});
*/
fs.readFile("./mymessage2.txt","utf-8",(err,data) => {
    if(err) throw err;
    console.log("data");
});

/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html' });
  res.write(req.url);
  res.end();
}).listen(8080);
*/