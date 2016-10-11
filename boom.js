var http=require("http");
var fs=require("fs");
var index=fs.readFileSync('contact.html');
http.createServer(function(req,res){
res.writeHead(200,{'Content-type':'html'});
res.end(index);
}).listen(8000);