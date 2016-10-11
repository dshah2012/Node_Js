var http = require("http");
var cluster = require("cluster");
var numCPUs = require("os").cpus().length;
if (cluster.isMaster) {
cluster.on("fork", function(worker) {
console.log("Attempting to fork worker");
});
cluster.on("online", function(worker) {
console.log("Successfully forked worker");
});
for (var i = 0; i < numCPUs; i++) {
cluster.fork();
}
} else {
http.createServer(function(request,response){
console.log(process.pid+"requested for" +request.url);
response.writeHead(200);
response.end("Hello");
}).listen(8000);
}